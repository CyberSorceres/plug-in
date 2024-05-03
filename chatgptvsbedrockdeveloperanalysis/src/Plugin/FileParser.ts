import * as vscode from 'vscode';
import UserStory from '../Libreria per frontend e plugin/UserStory';

export default class FileParser {
    
    private document: vscode.TextDocument;

    constructor(document: vscode.TextDocument) {}
    parseFile(): UserStory[] {} 
}