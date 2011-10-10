import GHC.IO

data Figure = Figure { draw :: IO ()
--                        ,move :: Displacement -> IO ()
                     }
 
type Displacement = (Int, Int)  -- horizontal and vertical displacement in points

circle    :: Point -> Radius -> IO Figure
rectangle :: Point -> Point -> IO Figure
 
type Point = (Int, Int)  -- point coordinates
type Radius = Int        -- circle radius in points

circle center radius = do
    let description = show center++"->"++show radius
    return $ Figure { draw = putStrLn description }
 
rectangle from to = do
    let description = show from++"[->]"++show to
    return $ Figure { draw = putStrLn description }

drawAll :: [Figure] -> IO ()
drawAll figures = do putStrLn "Drawing figures:"
                     mapM_ draw figures
 
main = do figures <- sequence [circle (10,10) 5,
                               circle (20,20) 3,
                               rectangle (10,10) (20,20),
                               rectangle (15,15) (40,40)]
          drawAll figures

-- circle center radius = do
--     centerVar <- newIORef center
--  
--     let drawF = do center <- readIORef centerVar
--                    putStrLn ("  Circle at "++show center
--                              ++" with radius "++show radius)
--  
--     let moveF (addX,addY) = do (x,y) <- readIORef centerVar
--                                writeIORef centerVar (x+addX, y+addY)
--  
--     return $ Figure { draw=drawF, move=moveF }
--  
--  
-- rectangle from to = do
--     fromVar <- newIORef from
--     toVar   <- newIORef to
--  
--     let drawF = do from <- readIORef fromVar
--                    to   <- readIORef toVar
--                    putStrLn ("  Rectangle "++show from++"-"++show to)
--  
--     let moveF (addX,addY) = do (fromX,fromY) <- readIORef fromVar
--                                (toX,toY)     <- readIORef toVar
--                                writeIORef fromVar (fromX+addX, fromY+addY)
--                                writeIORef toVar   (toX+addX, toY+addY)
--  
--     return $ Figure { draw=drawF, move=moveF }
-- 
-- main = do figures <- sequence [circle (10,10) 5,
--                                rectangle (10,10) (20,20)]
--           drawAll figures
--           mapM_ (\fig -> move fig (10,10)) figures
--           drawAll figures

-- data Figure = Figure { draw :: IO (),
--                        move :: Displacement -> IO (),
--                        area :: Double,
--                        origin :: IORef Point
--                      }
                     