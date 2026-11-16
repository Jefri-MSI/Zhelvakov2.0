function proverka()
{
    var n = Number(document.getElementById("chislo").value);
    var del = "";
    var prostoe = true;

    if (document.getElementById("chislo").value == "" || n < 2 || n != Math.floor(n))
    {
        document.getElementById("result").innerHTML = "Введите целое число больше 1";
    }
    else
    {
        for (var i = 2; i < n; i++)
        {
            if (n % i == 0)
            {
                prostoe = false;
            }
        }

        if (prostoe == true)
        {
            document.getElementById("result").innerHTML = "Число простое";
        }
        else
        {
            for (var i = 1; i <= n; i++)
            {
                if (n % i == 0)
                {
                    del = del + i + " ";
                }
            }

            document.getElementById("result").innerHTML = "Число не простое. Делители: " + del;
        }
    }
}
