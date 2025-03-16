#include<bits/stdc++.h>
#define cin(v) for (auto &i : v) cin >> i;
#define cout(v) for (auto i : v ) cout << i << ' '; cout << '\n';
#define cin2d(v) for (auto &j: v) cin(j);
#define cout2d(v) for (auto &i : v) {cout(i); cout << '\n';}
#define YES cout << "YES\n"
#define NO cout << "NO\n"
#define ll long long
#define fast cin.tie(nullptr); cout.tie(nullptr); ios_base::sync_with_stdio(false);
using namespace std;
 
int main()
{
          fast;

          int a, b, c;
          cin >> a >> b >> c;
          
          if(a >= b && a >= c)
                    if(b >= c)
                              cout << c << "\n" << b << "\n" << a;
                    else
                              cout << b << "\n" << c << "\n" << a;
          else if(b >= a && b >= c)
                    if(a >= c)
                              cout << c << "\n" << a << "\n" << b;
                    else
                              cout << a << "\n" << c << "\n" << b;
          else if(c >= b && c >= a)
                    if(b >= a)
                              cout << a << "\n" << b << "\n" << c;
                    else
                              cout << b << "\n" << a << "\n" << c;
          
          cout << "\n\n";
          
          cout << a << "\n" << b << "\n" << c;
          return 0;
}
