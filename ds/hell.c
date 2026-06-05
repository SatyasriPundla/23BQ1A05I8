#include<stdio.h>
int main()
{
char *str = "Hello World";
int i=0;
printf("Original String: %s\n",str);
printf("After AND with 127: ");
while(str[i]!="\0")
{
char result=str[i]&127;
printf("%c",result);
i++;
}
i=0;
printf("After XOR with 127: ");
while(str[i]!= "\0")
{
char result=str[i]^127;
printf("%c",result);
i++;
}
return 0;
}
