const anggotaData = [
  { nama: 'Min D', posisi: 'Ketua', foto: 'foto1.jpg' },
  { nama: 'Min B', posisi: 'Member', foto: 'foto2.jpg' },
  { nama: 'Min F', posisi: 'Member', foto: 'foto3.jpg' },
  { nama: 'Min A', posisi: 'Member', foto: 'foto4.jpg' },
  { nama: 'Min R', posisi: 'Member', foto: 'foto5.jpg' },
];

const ketuaContainer = document.getElementById('ketua-container');
const anggotaContainer = document.getElementById('anggota-container');

anggotaData.forEach(({ nama, posisi, foto }) => {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-4 col-lg-3 mb-4 d-flex justify-content-center';
  col.innerHTML = `
    <div class="card p-4 h-100 text-center animate__animated animate__fadeInUp">
      <img src="${foto}" alt="${nama}" class="mx-auto mb-3"/>
      <h5 class="fw-semibold">${nama}</h5>
      <p class="text-info">${posisi}</p>
    </div>`;
  (posisi === 'Ketua' ? ketuaContainer : anggotaContainer).appendChild(col);
});

document.getElementById('showQRIS').addEventListener('click', () => {
  Swal.fire({
    title: 'Bayar via QRIS',
    text: 'Silakan scan QRIS berikut dan setelah itu tunjukkan bukti ke Admin kami ya.',
    imageUrl: 'qris.jpg',
    imageWidth: 250,
    imageAlt: 'Kode QRIS',
    confirmButtonText: 'Oke, saya akan bayar!',
    background: '#1a1a1a',
    color: '#fff',
    confirmButtonColor: '#00bcd4'
  });
});

window.addEventListener('load', () => {
  const loading = document.getElementById('loading-screen');
  if (loading) {
    loading.classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => loading.style.display = 'none', 1000);
  }
});
