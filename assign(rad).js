class Program
{
    static void Main(string[] args)
    {
            //Variables
            double radius;
            double pi = Math.PI;
            double A, C;

            //Ask the user for an input.
            Console.Write("Enter a number for the radius: ");
            radius = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();

            //Calculate Circumference
            C = 2 * pi * radius;

            //Calculate Area
            A = pi * (Math.Pow(radius, 2));

            //Display answers
            Console.WriteLine($"Circumference = {C}");
            Console.WriteLine();
            Console.WriteLine($"Area = {A}");
            Console.ReadLine();
        
    }
}