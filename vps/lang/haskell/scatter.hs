import GHC.IO

-- module Figure ( Figure, Displacement, Point, Radius, circle, triangle, rectangle, move, gettxt )

type Figure       = [ Int ]
type Displacement = (Int, Int)  -- horizontal and vertical displacement in points
type Point        = (Int, Int)  -- point coordinates
type Radius       = Int        -- circle radius in points

circle    :: Point -> Radius          -> Figure
rectangle :: Point -> Point           -> Figure
triangle  :: Point -> Point -> Point  -> Figure

move      :: Displacement -> Figure   -> Figure

gettxt    :: Figure                   -> String

circle (a,b) r       = [ 1, a, b, r ]
triangle a b c       = [ 2, 1, 2, 3 ]
rectangle from to    = [ 3, 0, 0, 0 ]

move b a = a

gettxt [ 1, a, b, c ] = "C" ++ show a ++ "->" ++ show b ++ "->" ++ show c
gettxt [ 2, a, b, c ] = "T" ++ show a ++ "->" ++ show b ++ "->" ++ show c
gettxt [ 3, a, b, c ] = "R" ++ show a ++ "->" ++ show b ++ "->" ++ show c

-- main = do mapM_ putStrLn (map gettxt [circle (0,0) 0 ])

main = do
			let a = [circle (10,10) 5,
				rectangle (10,10) (20,20),
				triangle (0,0) (0,0) (0,0)]
			mapM_ putStrLn (map gettxt a)

