// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

const vscode = require("vscode");
const axios = require("axios");
const sha256 = require("js-sha256").sha256;
const configuration = vscode.workspace.getConfiguration();
var uuid = require("node-uuid");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "translation" is now active!');

    let disposable = vscode.commands.registerCommand(
        "extension.showTranslation",
        function() {
            const editor = vscode.window.activeTextEditor;
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            var input = text;
            if (text.length > 20) {
                input = text.substr(0, 10) + text.length + text.substr(-10, 10);
            }
            var ctime = Math.round(new Date().getTime() / 1000) + "";
            var body = {
                q: text,
                from: "auto",
                to: "auto",
                appKey: configuration.get("translation.youdaoAppKey"),
                curtime: ctime,
                salt: uuid
                    .v1()
                    .toString()
                    .replace(/-/g, ""),
                signType: "v3"
            };
            body["sign"] = sha256(
                body["appKey"] +
                    input +
                    body["salt"] +
                    ctime +
                    configuration.get("translation.youdaoSecretKey")
            );

            axios.default
                .get("http://openapi.youdao.com/api", { params: body })
                .then(function(response) {
                    console.log(response.data);
                    const basic = response.data.basic;

                    var info = "";
                    if (basic && basic["phonetic"]) {
                        info += "[" + basic["phonetic"] + "]; ";
                    }
                    if (
                        basic &&
                        basic["explains"] &&
                        basic["explains"].length > 0
                    ) {
                        basic["explains"].forEach(element => {
                            info += element + "; ";
                        });
                    }
                    if (
                        configuration.get("translation.displayMethod") ===
                        "statusBar"
                    ) {
                        vscode.window.setStatusBarMessage(
                            info,
                            configuration.get("translation.hideTimeout") * 1000
                        );
                    } else {
                        vscode.window.showInformationMessage(info);
                    }
                });
        }
    );

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
