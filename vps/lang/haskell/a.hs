data Point = FloatPoint Float Float
	| IntPoint Int Int

coord :: Point -> (Float,Float)
coord (FloatPoint x y) = ( x, y )
coord (IntPoint   x y) = ( realToFrac x, realToFrac y )

printp = do print (coord (FloatPoint 1 2))
            print (coord (IntPoint 1 2))

cuadrado = do
	putStrLn "-->"
	n <- readLn
 	print( n * n )

data Color = RGB String

-- data Shape = MS Color Point
-- data Circle = SR Shape Int

colorToString :: Color -> String
colorToString (RGB x) = x

pc = do print (colorToString (RGB "red"))

instance (Show a) => Show (Color a) where
	Show a = colorToString a

showColor (RGB x) = show x

getcircles = let x = [1..5] in
	map (\x -> (RGB "red")) x
	
	
