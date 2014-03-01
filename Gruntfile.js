module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            copy: {
                files: ['client/lib/**', 'client/index.html', 'client/partials/**'],
                tasks: 'copy'
            },
            coffee: {
                files: ['client/**/*.coffee'],
                tasks: 'coffee'
            }
        },
        clean: ['.build'],
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'client/lib/', src: ['**'], dest: '.build/lib/'},
                    {expand: true, cwd: 'client/partials/', src: ['**'], dest: '.build/partials/'},
                    {expand: true, cwd: 'client/', src: ['index.html'], dest: '.build/'}
                ]
            }
        },
        coffee: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    '.build/application.js': ['client/application.coffee', 'client/**/*.coffee']
                }
            }
        },
        less: {
            dist: {
                options: {
                },
                files: {
                    ".build/styles.css": "client/styles.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('build', ['clean', 'coffee', 'copy', 'less']);
    grunt.registerTask('default', ['build', 'watch']);
};
