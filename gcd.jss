input 101
input 102

move g
cmpr 101 102
je res
jl dif

sub 101 102 101
jump g

move dif 
sub 102 101 102
jump g

move res
gcd output 101
exit