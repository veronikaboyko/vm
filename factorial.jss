input 100
inst 200 0
inst 201 1
inst 202 1
inst 203 1

cmpr 100 200
je res

move f
cmpr 100 201
je res

add 202 201 201
mul 201 203 203
jump f

move res
fact output 203
exit