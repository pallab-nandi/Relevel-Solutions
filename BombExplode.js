/**
 * Q - WRITE AN ALGORITHM TO INCREASE RIGHT ADJECENT NUMBER TO 1 IF BOMB EXPLODE.
 * Ans - Steps to be followed :-
 *          STEP 1 - Declare a matrix with bomb included, (say there is 3X3 Matrix having bomb(-1) in 
 * position (1,1) and (2,2) )
 *          STEP 2 - Observe what happening when right adjecent number increased after bomb explode.
 *          STEP 3 - We observed since right adjecent number is increased its nothing but having 2nd index with +1,
 * i.e. if bomb is on position (1,1) the number with index (1,2) should increase. And if there such no position then
 * the program stops there, like if bomb is in the position (2,2) then the number with index (2,3) should increase.
 * But there such no position since it is a 3X3 Matrix.
 *          STEP 4 - Have to use 2 loops to find the solution.
 */