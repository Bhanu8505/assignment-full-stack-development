#include<iostream>
using namespace std;
class rectangle
{
	private:
		int length,breadth,q;
		
		public:
			rectangle(int x,int y)
			{
				length=x,breadth=y;
			}
			
			int calculate()
			{
				q=length*breadth;
				return q;
			}
			void show()
			{
				cout<<"Area of Rectangle is "<<q<<endl;
			}
};
main()
{
	rectangle r1(2,9);
	r1.calculate();
	r1.show();
	rectangle r2(4,5);
	r1.calculate();
	r2.show();
	return 0;
}
