export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i <= str.length; i++) {
        switch (str[i]) {
            case 'M':
                result += 1000;
                break;
            case 'D':
                result += 500;
                break;
            case 'C':
                if (str[i + 1] == 'M') result += 900;
                else if (str[i + 1] == 'D') result += 400;
                else {
                    result += 100;
                    i--;
                }
                i++;
                break;
            case 'L':
                if (str[i + 1] == 'M') result += 950;
                else if (str[i + 1] == 'D') result += 450;
                else {
                    result += 50;
                    i--;
                }
                i++;
                break;
            case 'X':
                if (str[i + 1] == 'M') result += 990;
                else if (str[i + 1] == 'D') result += 490;
                else if (str[i + 1] == 'C') result += 90;
                else if (str[i + 1] == 'L') result += 40;
                else {
                    result += 10;
                    i--;
                }
                i++;
                break;
            case 'V':
                if (str[i + 1] == 'M') result += 995;
                else if (str[i + 1] == 'D') result += 495;
                else if (str[i + 1] == 'C') result += 95;
                else if (str[i + 1] == 'L') result += 45;
                else {
                    result += 5;
                    i--;
                }
                i++;
                break;
            case 'I':
                if (str[i + 1] == 'M') result += 999;
                else if (str[i + 1] == 'D') result += 499;
                else if (str[i + 1] == 'C') result += 99;
                else if (str[i + 1] == 'L') result += 49;
                else if (str[i + 1] == 'X') result += 9;
                else if (str[i + 1] == 'V') result += 4;
                else {
                    result += 1;
                    i--;
                }
                i++;
                break;
        }
    }
    return result;
}
