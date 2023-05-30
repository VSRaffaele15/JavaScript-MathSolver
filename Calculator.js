let MathSolverJavaScriptVer = [
    function Somma(a, b) {
        return a + b;
    },
    function Sottrazione(a, b) {
        return a - b;
    },
    function Moltiplicazione(a, b) {
        return a * b;
    },
    function Divide(a, b) {
        return a / b;
    },
    function Mod(a, b) {
        return a % b;
    },
    function Double(a) {
        return a * 2;
    },
    function Triple(a) {
        return a * 3;
    },
    function Quadruple(a) {
        return a * 4;
    },
    function Elevate(a, b) {
        return a ** b;
    },
    function DoubleElevate(a, b) {
        return a ** b ** b;
    },
    function TripleElevate(a, b) {
        return a ** b ** b ** b;
    },
    function QuadrupleElevate(a, b) {
        return a ** b ** b ** b ** b;
    },
    function VerifyType(a) {
        if (a % 2 == 0) {
            return "Same!";
        } else if (a % 2 == 1) {
            return "Odd!";
        } else {
            return "Uknown?!?";
        }
    },
    function DataConvert(day, month, age) {
        return "" + day + "/" + month + "/" + age;
    },
    function TimeConvert(seconds, minutes, hours) {
        return "" + seconds + ":" + minutes + ":" + hours;
    },
    PRT = Math.sqrt(Math.PI)
]
