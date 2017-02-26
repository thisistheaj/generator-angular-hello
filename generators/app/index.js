'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the impeccable ' + chalk.red('generator-angular-hello') + ' generator!'
    ));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('css'),
      this.destinationPath('css')
    );
    this.fs.copy(
      this.templatePath('js'),
      this.destinationPath('js')
    );
    this.fs.copy(
      this.templatePath('templates'),
      this.destinationPath('templates')
    );
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    );
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
