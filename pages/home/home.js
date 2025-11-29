function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("closed");
}

   /* ------------------ GRÁFICO DE FAIXAS ------------------ */
        const faixaCtx = document.getElementById('faixaChart').getContext('2d');
        new Chart(faixaCtx, {
            type: 'bar',
            data: {
                labels: ['Branca', 'Azul', 'Roxa', 'Marrom', 'Preta'],
                datasets: [{
                    label: 'Quantidade',
                    data: [40, 32, 20, 18, 10],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } }
            }
        });

        /* ------------------ GRÁFICO DE PESO ------------------ */
        const pesoCtx = document.getElementById('pesoChart').getContext('2d');
        new Chart(pesoCtx, {
            type: 'pie',
            data: {
                labels: ['Galo', 'Pluma', 'Pena', 'Leve', 'Médio', 'Meio Pesado', 'Pesado'],
                datasets: [{
                    data: [5, 12, 20, 25, 18, 10, 8]
                }]
            },
            options: {
                responsive: true,
            }
        });