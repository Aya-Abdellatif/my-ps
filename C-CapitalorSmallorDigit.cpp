#include<bits/stdc++.h>

using namespace std;
 
 
int main()
{
      char x;
      cin>>x;
      
      if(x >= 48 && x <= 57)
          cout << "IS DIGIT";
      else{
                cout << "ALPHA\n";
                if(x >= 65 && x <= 90)
                    cout<<"IS CAPITAL";
                else
                    cout<<"IS SMALL";
      }

      return 0;
}
