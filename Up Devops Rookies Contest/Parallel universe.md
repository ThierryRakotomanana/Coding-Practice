In our universe, positive integer numbers start from 0 and go up to infinity, i.e we count things based on the following ten digits in order: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. So according to this, the 10-th number in our universe is 9, the 11-th is 10, the 20-th is 19, the 155-th is 154, etc.

In a parallel universe, they have the same digits but not necessarily in the same order as in ours. They might start counting from 5 and go up to infinity, based on the order of digits that follows: 5, 1, 6, 4, 0, 7, 8, 2, 9, and 3. So here, their 10-th number accroding to our counting system is 15, the 11-th is 11, the 20-th is 13, 155-th is 170, etc.

In this challenge, you are given the digits order of a parallel universe, and a number N, you need to print the N-th number of their system according to our counting system.

Input Format

The first line of input contains an integer T: the number of parallel universes (test cases).
Each of the next T lines consists of eleven (11) space separated integers, where
The first ten (10) represent the order of digits in the concerned universe, consisting of the digits [0-9]
The eleventh is the number N
Constraints

1 <= T <= 10^3

1 <= N <= 10^9

Output Format

The output should contain T lines, each of which contains an integer, the required answer according to the description.

Sample Input 0

3
0 1 2 3 4 5 6 7 8 9 50
5 1 6 4 0 7 8 2 9 3 50
3 6 0 5 2 4 1 9 7 8 100
Sample Output 0

49
3
88