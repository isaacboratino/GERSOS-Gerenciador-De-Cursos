//importamos o modulo gulp
var gulp = require('gulp');
//importamos o modulo para compilacao de arquivos typescript
var tsc  = require('gulp-typescript-compiler');
//todo arquivo gulpfile deve conter uma tarefa
//nomeada default, esta tarefa será responsável
//por chamar as demais tarefas
gulp.task('default', ['compile', 'watch']);
//criando a tarefa para compilar os
//arquivos typescript, a partir do
//modulo nodejs gulp typescript compiler
gulp.task('compile', function() {
  
  return gulp.
        //informamos que a pasta de nossos
        //arquivos typescript estarão em src
        //e esta função procurará por todos arquivos
        //desta extensão
        src('server/src/**/*.ts')
        
        //em seguida, executamos a funçao
        //do gulp typescript compiler,
        //passando informacoes similares
        //ao nosso tsconfig
        .pipe(tsc({
            module: 'commonjs',
            target: 'ES5',
            logErrors: true
        }))
        
        //incluimos a pasta para a saida de
        //arquivos transpilados
        .pipe(gulp.dest('server/lib'));
});

//funçao responsável pela observacao de alteracoes em
//arquivos de nossa pasta src.
//a cada alteração, automaticamente, serão recompilados
gulp.task('watch', function () {
    return gulp.watch('server/src/**/*.*', ['compile']);
});