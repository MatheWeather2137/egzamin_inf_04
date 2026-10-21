using System;

namespace konsolowka
{
    class Program
    {
        private static Random random = new Random();
        private static readonly string maleLitery = "abcdefghijklmnopqrstuvwxyz";
        private static readonly string duzeLitery = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        private static readonly string polskieZnaki = "ąćęłńóśźżĄĆĘŁŃÓŚŹŻ";
        private static readonly string cyfry = "0123456789";
        private static readonly string znakiSpecjalne = " !@#$%^&*()_+";

        public static string GenerujHaslo()
        {
            List<char> znakiHasla = new List<char>();

            for (int i = 0; i < 3; i++)
            {
                znakiHasla.Add(maleLitery[random.Next(maleLitery.Length)]);
            }

            for (int i = 0; i < 3; i++)
            {
                znakiHasla.Add(duzeLitery[random.Next(duzeLitery.Length)]);
            }

            for (int i = 0; i < 2; i++)
            {
                znakiHasla.Add(polskieZnaki[random.Next(polskieZnaki.Length)]);
            }

            for (int i = 0; i < 2; i++)
            {
                znakiHasla.Add(cyfry[random.Next(cyfry.Length)]);
            }

            for (int i = 0; i < 2; i++)
            {
                znakiHasla.Add(znakiSpecjalne[random.Next(znakiSpecjalne.Length)]);
            }

            for (int i = znakiHasla.Count - 1; i > 0; i--)
            {
                int j = random.Next(i + 1);
                char temp = znakiHasla[i];
                znakiHasla[i] = znakiHasla[j];
                znakiHasla[j] = temp;
            }

            return new string(znakiHasla.ToArray());
        }

        static void Main(string[] args)
        {
            string haslo = GenerujHaslo();
            Console.WriteLine("Wygenerowane hasło: " + haslo);


        }
    }
}