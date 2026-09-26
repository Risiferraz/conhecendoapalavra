console.log('Script carregado');
document.addEventListener('DOMContentLoaded', () => {
    const item = document.getElementById('eclesiastes12-1');
    const anchor = item?.querySelector('a');
    const link = anchor?.href;

    if (!item || !link) return;

    item.style.cursor = 'pointer';

    item.addEventListener('click', (e) => {
        // Se clicou no <a>, mantém o comportamento padrão
        if (e.target.closest('a')) return;
        window.location.href = link;
    });

    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.location.href = link;
        }
    });
});