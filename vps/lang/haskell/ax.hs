main = print( fac 13 )

fac n = foldl (*) 1 [1..n-1]
