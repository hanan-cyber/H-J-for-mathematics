function plotGraph() {
    let equation = document.getElementById('equation').value;

    // تحويل الدالة الرياضية إلى صيغة يفهمها Plotly
    let xValues = [];
    let yValues = [];

    for (let x = -10; x <= 10; x += 0.1) {
        xValues.push(x);
        yValues.push(eval(equation.replace(/x/g, x)));
    }

    let trace = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        type: 'scatter'
    };

    let layout = {
        title: `رسم الدالة: ${equation}`,
        xaxis: {
            title: 'X',
            range: [-10, 10]
        },
        yaxis: {
            title: 'Y',
            range: [-10, 10]
        }
    };

    Plotly.newPlot('graph', [trace], layout);
}
