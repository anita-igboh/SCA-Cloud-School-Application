import arg from 'arg';
import inquirer from 'inquirer';
import os from 'os';
import { boolean, option, options } from 'yargs';


function parseArgument(rawArgs) {

    const args = arg({
        '--git': Boolean,
        '--yes': Boolean,
        '--install': Boolean,
        '-g': '--git',
        '-y': '--yes',
        '-i': '--install'
    }, {
        argv: rawArgs.slice(2),
    });
    return {
        skipPrompts: args['--yes'] || false,
        git: args['--git'] || false,
        // template: args._[0],
        runInstall: args['--install'] || false
    }
}

async function promptForMissingOptions() {

    const defaultTemplate = 'Setup for me ';
    if (options.skipPrompts) {
        return {
            ...options,
            template: options.template || defaultTemplate,
        }
    }

    const questions = [];

    if (!options.template) {
        questions.push({
            type: 'list',
            name: 'template',
            message: 'How would you like to setup?',
            choices: ['Setup for me', 'I will setup myself'],
            default: false
        })
    }

    if (!options.git) {
        questions.push({
            type: 'confirm',
            name: 'git',
            message: 'Do you want to initialize a git repository?',
            default: false
        })
    }

    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        template: options.template || answers.template,
        git: options.git || answers.git
    }

}

export async function cli(args) {
    let options = parseArgument(args);
    options = await promptForMissingOptions(options)
    console.log(os.type());
    // console.log(options);
} 