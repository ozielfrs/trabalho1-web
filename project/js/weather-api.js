let semana = {
    "SEG.": "Segunda",
    "TER.": "Terça",
    "QUA.": "Quarta",
    "QUI.": "Quinta",
    "SEX.": "Sexta",
    "SÁB.": "Sábado",
    "DOM.": "Domingo",
};

const now = new Date(Date.now());
let timeInt = new Date(now).getHours() % 24;
timeInt = timeInt > 18 || timeInt < 6 ? 2 : 1;

function windDirection(value) {
    let directions = [
        [22.5, `Norte <i class="fa-solid fa-up-long"></i>`],
        [67.5, `Nordeste <i class="fa-solid fa-up-long"></i>`],
        [112.5, `Leste <i class="fa-solid fa-right-long"></i>`],
        [157.5, `Sudeste <i class="fa-solid fa-right-long"></i>`],
        [202.5, `Sul <i class="fa-solid fa-down-long"></i>`],
        [247.5, `Sudoeste <i class="fa-solid fa-down-long"></i>`],
        [292.5, `Oeste <i class="fa-solid fa-left-long"></i>`],
        [337.5, `Noroeste <i class="fa-solid fa-left-long"></i>`],
    ];
    let i = 0;
    while (i < 8) {
        if (directions[i][0] > value) return directions[i];
        i++;
    }
}

function formatDate(date) {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}

function formatTime(date, roundMinutes = true) {
    var d = new Date(date),
        minutes = "" + d.getMinutes(),
        hours = "" + d.getHours();

    if (minutes.length < 2) minutes = "0" + minutes;
    if (hours.length < 2) hours = hours;

    return roundMinutes ? [hours, "00"].join(":") : [hours, minutes].join(":");
}

function weatherImage(weathercode) {
    let codigosClima = {
        0: [`claro`, `./images/sun.png`, `./images/moon.png`],
        1: [`principalmente claro`, `./images/sun.png`, `./images/moon.png`],
        2: [
            `parcialmente nublado`,
            `./images/cloud-t-separated.png`,
            `./images/cloud-t-separated.png`,
        ],
        3: [`nublado`, `./images/sun-cloud.png`, `./images/moon-cloud.png`],
        45: [`nebuloso`, `./images/cloud-t.png`, `./images/cloud-t.png`],
        48: [
            `depositando neblina de geada`,
            `./images/cloud-t.png`,
            `./images/cloud-t.png`,
        ],
        51: [
            `chuvisco leve`,
            `./images/sun-clouds-rain.png`,
            `./images/moon-cloud-rain.png`,
        ],
        53: [
            `chuvisco moderado`,
            `./images/sun-clouds-rain.png`,
            `./images/moon-cloud-rain.png`,
        ],
        55: [
            `chuvisco denso`,
            `./images/sun-clouds-rain.png`,
            `./images/moon-cloud-rain.png`,
        ],
        56: [
            `chuvisco leve e gelado`,
            `./images/sun-clouds-rain.png`,
            `./images/moon-cloud-rain.png`,
        ],
        57: [
            `chuvisco gelado denso`,
            `./images/sun-clouds-rain.png`,
            `./images/moon-cloud-rain.png`,
        ],
        61: [
            `chuva leve`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        63: [
            `chuva moderada`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        65: [
            `chuva forte`,
            `./images/cloud-t-heavyrain.png`,
            `./images/cloud-t-heavyrain.png`,
        ],
        66: [
            `chuva leve e gelada`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        67: [
            `chuva forte e congelante`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        71: [
            `leve queda de neve`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        73: [
            `queda de neve moderada`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        75: [
            `queda de neve pesada`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        77: [
            `grãos de neve`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        80: [
            `pequenas pancadas de chuva`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        81: [
            `chuvas moderadas`,
            `./images/sun-clouds-rain.png`,
            `./images/moon-cloud-rain.png`,
        ],
        82: [
            `chuvas fortes`,
            `./images/cloud-t-heavyrain.png`,
            `./images/cloud-t-heavyrain.png`,
        ],
        85: [
            `pequenas pancadas de neve`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        86: [
            `fortes aguaceiros de neve`,
            `./images/cloud-t-rain.png`,
            `./images/cloud-t-rain.png`,
        ],
        95: [
            `tempestade leve a moderada`,
            `./images/cloud-thunder-rain.png`,
            `./images/cloud-thunder-rain.png`,
        ],
        96: [
            `trovoada com leve granizo`,
            `./images/cloud-thunder.png`,
            `./images/cloud-thunder.png`,
        ],
        99: [
            `trovoada com forte granizo`,
            `./images/cloud-thunder.png`,
            `./images/cloud-thunder.png`,
        ],
    };

    return codigosClima[weathercode];
}

function updateCards() {
    if (timeInt == 2) {
        document.querySelector(
            ".all-container"
        ).className += ` bg-dark text-white`;
        document.querySelectorAll("[card]").forEach((element) => {
            element.className += ` bg-black text-white`;
        });
    } else {
        document.querySelector(
            ".all-container"
        ).className += ` bg-white text-black`;
        document.querySelectorAll("[card]").forEach((element) => {
            element.className += ` bg-white text-black`;
        });
    }
}

function getGradient(ctx, chartArea) {
    let width, height, gradient;
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(
            20,
            chartArea.bottom,
            20,
            chartArea.top
        );
        gradient.addColorStop(0, `#118ab2`);
        gradient.addColorStop(0.5, `#ffd166`);
        gradient.addColorStop(1, `#ef476f`);
    }

    return gradient;
}

function fetchDaily(value = 1) {
    fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=-19.73&longitude=-43.01&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=America%2FSao_Paulo&start_date=${formatDate(
            new Date(now).setDate(new Date(now).getDate() + 1)
        )}&end_date=${formatDate(
            new Date(now).setDate(new Date(now).getDate() + value)
        )}`
    )
        .then((resp) => resp.json())
        .then((out) => {
            document.querySelector("[next-days]").innerHTML = "";

            for (let i = 0; i < out.daily.time.length; i++) {
                const tempMaxUnit = out.daily_units.temperature_2m_max,
                    tempMinUnit = out.daily_units.temperature_2m_min,
                    precUnit = out.daily_units.precipitation_sum;
                const code = out.daily.weathercode[i],
                    max = out.daily.temperature_2m_max[i],
                    min = out.daily.temperature_2m_min[i],
                    prec = out.daily.precipitation_sum[i],
                    time = new Date(
                        Date.UTC(
                            now.getFullYear(),
                            now.getMonth(),
                            now.getDate() + (i + 2)
                        )
                    ),
                    options = { weekday: "short" };

                const strTime =
                    semana[
                        time.toLocaleDateString("pt-BR", options).toUpperCase()
                    ] + ` ${time.getDate()}/${time.getMonth()}`;

                document.querySelector(
                    "[next-days]"
                ).innerHTML += `<div class="col d-flex justify-content-center mt-3">
                    <div class="card" card>
                        <div class="card-body text-center">
                            <h5 class="card-title">${strTime}</h5>
                            <a image-area-${i}><img class="current-weather" src=${
                    weatherImage(code)[timeInt]
                } alt=""></a>
                            <div class="container-max-min d-flex flex-row justify-content-between">
                                <div class="card-text-maximum d-flex flex-row align-middle" max-temp><img class="current-weather-prec-mini" src="./images/sun-hot.png" title="Máxima"><p>${max.toFixed(
                                    1
                                )}${tempMaxUnit}</p></div>
                                <div class="card-text-minimum d-flex flex-row align-middle" min-temp><img class="current-weather-prec-mini" src="./images/blue-snow.png" title="Mínima"><p>${min.toFixed(
                                    1
                                )}${tempMinUnit}</p></div>
                            </div>
                            <div class="d-flex flex-row align-middle justify-content-center" prec-${i} precipitation><img class="current-weather-prec-mini" src="./images/waterdrops.png" title="Precipitação"><p>${prec}${precUnit}</p></div>
                        </div>
                    </div>`;
            }
            updateCards();
        })
        .catch((e) => {
            console.error(e);
        });
}

/*
`https://api.open-meteo.com/v1/forecast?
latitude=-19.73&longitude=-43.01
&hourly=precipitation,weathercode,cloudcover_high,windspeed_180m,winddirection_180m,temperature_180m
&timezone=America%2FSao_Paulo
&start_date=2022-10-24
&end_date=2022-10-24`
*/
/*
https://api.open-meteo.com/v1/forecast?
latitude=-19.73&longitude=-43.01
&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum
&timezone=America%2FSao_Paulo
&start_date=2022-10-25
&end_date=2022-10-30
*/

window.addEventListener("load", () => {
    updateCards();
    var ctx = document.getElementById("temperatureChart").getContext("2d");

    fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=-19.73&longitude=-43.01&hourly=precipitation,weathercode,cloudcover_high,windspeed_180m,winddirection_180m,temperature_180m&timezone=America%2FSao_Paulo&start_date=${formatDate(
            now
        )}&end_date=${formatDate(now)}`
    )
        .then((resp) => resp.json())
        .then((out) => {
            var indexNow = out.hourly.time.findLastIndex(
                (element) =>
                    formatTime(Date.parse(element)) == formatTime(now, true)
            );
            var timeNow = ``;
            var tempNow = out.hourly.temperature_180m[indexNow];
            var newChart = {
                type: `line`,
                data: {
                    labels: out.hourly.time.map((p) => {
                        let time = formatTime(Date.parse(p));
                        time = time.slice(0, 2).replace(`:`, ``);
                        if (parseInt(parseInt(time) / 12) > 0)
                            time =
                                time == `12`
                                    ? `12PM`
                                    : `${parseInt(time % 12)}`.concat(`PM`);
                        else time = time == `0` ? `12AM` : time.concat(`AM`);
                        if (
                            formatTime(now, true) == formatTime(Date.parse(p))
                        ) {
                            timeNow = time;
                        }
                        return time;
                    }),
                    datasets: [
                        {
                            type: `bar`,
                            data: [
                                {
                                    x: timeNow,
                                    y: tempNow,
                                },
                            ],
                            maxBarThickness: 2,
                            backgroundColor:
                                tempNow > 25
                                    ? `#ef476f`
                                    : tempNow > 15
                                    ? `#ffd166`
                                    : `#118ab2`,
                            label: `Agora (${out.hourly_units.temperature_180m})`,
                        },
                        {
                            /* Propriedades das linhas */
                            tension: 0.25,
                            backgroundColor: `#fff`,
                            borderColor: (context) => {
                                const chart = context.chart;
                                const { ctx, chartArea } = chart;
                                return chartArea
                                    ? getGradient(ctx, chartArea)
                                    : 0;
                            },
                            borderWidth: 1.5,

                            /* Propriedades dos pontos */
                            pointRadius: 1,
                            /* Propriedades da tabela */
                            label: `Temperatura (${out.hourly_units.temperature_180m})`,
                            data: out.hourly.temperature_180m,
                        },
                    ],
                },
                options: {
                    plugins: {
                        /* Propriedades da Legenda */
                        legend: {
                            position: `top`,
                        },
                        /* Propriedades do Título */
                        title: {
                            display: true,
                            text: `Temperatura em Itabira`,
                        },
                    },
                    maintainAspectRatio: false,
                    responsive: true,
                },
            };
            new Chart(ctx, newChart);

            let image = weatherImage(out.hourly.weathercode[indexNow])[timeInt];

            document.querySelector(
                "[image-area]"
            ).innerHTML = `<img class="current-weather" src=${image} alt="">`;

            document.querySelector(
                "[subtitle]"
            ).innerHTML = `Agora são ${formatTime(now, false)}`;

            document.querySelector(
                "[max-temp]"
            ).innerHTML = `<p>Máx.: ${Math.max(
                ...out.hourly.temperature_180m
            ).toFixed(1)}${out.hourly_units.temperature_180m}</p>`;

            document.querySelector(
                "[min-temp]"
            ).innerHTML = `<p>Min.: ${Math.min(
                ...out.hourly.temperature_180m
            ).toFixed(1)}${out.hourly_units.temperature_180m}</p>`;

            document.querySelector(
                ".wind-direction"
            ).innerHTML = `<img class="current-weather-wind" src="./images/cloud-wind.png" alt="">
            <p>O vento sopra a ${out.hourly.windspeed_180m[indexNow]}${
                out.hourly_units.windspeed_180m
            } na direção ${
                windDirection(out.hourly.winddirection_180m[indexNow])[1]
            }`;

            document.querySelector(
                ".precipitation"
            ).innerHTML = `<img class="current-weather-prec" src="./images/waterdrops.png" alt=""> A precipitação agora é de ${out.hourly.precipitation[indexNow]}${out.hourly_units.precipitation}`;

            const time = new Date(
                    Date.UTC(
                        now.getFullYear(),
                        now.getMonth(),
                        now.getDate() + 1
                    )
                ),
                options = { weekday: "short" };
            const strTime =
                semana[
                    time.toLocaleDateString("pt-BR", options).toUpperCase()
                ] + ` ${time.getDate()}/${time.getMonth()}`;

            document.querySelector(
                "[main-title]"
            ).innerHTML = `<h1 class="pt-5 d-flex justify-content-center align middle">Temperatura Hoje (${strTime})</h1>`;
        })
        .catch((e) => {
            console.error(e);
        });
    fetchDaily(5);
});
