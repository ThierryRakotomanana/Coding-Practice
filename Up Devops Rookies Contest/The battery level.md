The battery level indicator of a phone is an icon that contains a "stepped" progress bar. The step S on the progress bar varies from phone to phone, but its maximum value is always 100 and the minimum value is always 0.

For displaying the battery level, the program on the phone gets the real value V from the sensors and rounds it up to the nearest step value of the progress bar. Your task for this challenge is to write such a program.

Read the sample test explanation carefully for better undestanding

	Input Format

The first line of input contains an integer T, the number of phones (test cases).
Each of the next T lines contains two integers:
S : the progress bar step for the concerned phone
V : the real value of the battery level from the sensors

	Constraints

	1 <= T <= 10^4
	1 <= S <= 30
	0 <= V <= 100
	Output Format

The output should contain T lines, each containing rounded up step value of the battery level of the concerned phone.

	Sample Input 0

	4
	20 23
	10 0
	30 95
	5 65
	
	Sample Output 0

	40
	0
	100
	65
	Explanation 0

For the first case, the progress bar has a step of 20, so the step values are 0, 20, 40, 60, 80, and 100. Since the real battery level is 23, which is between the two step values 20, and 40, therefore it is rounded up to 40.
For the third case, the step values are 0, 30, 60, 90 and 100 (remember, the max step value is 100, so 120 is impossible as step value), then battery level of 95 is rounded up to 100.
For the forth case, 65 is already a step value, so it's not changed.