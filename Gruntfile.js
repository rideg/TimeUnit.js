module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['src/*.js']
        },
        jasmine: {
            all: {
                src: ['src/TimeUnit.js'],
                options: {
                    specs: 'src/TimeUnit.spec.js',
                    errorReporting: true
                }
            }
        },
        uglify: {
            all: {
                options: {
                    mangle: {
                        except: ['TimeUnit']
                    }
                },
                files: {
                    'build/TimeUnit.min.js': 'src/TimeUnit.js'
                }
            }
        },
        clean: ['build'],
        watch: {
            all: {
                files: ['src/*.js'],
                tasks: ['clean', 'jshint:all', 'jasmine:all', 'uglify:all']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['clean', 'jshint', 'jasmine', 'uglify', 'watch']);
};
