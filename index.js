const data = {
      hosting:[['1 gb cpu 30%','1.000'],['2 gb cpu 60%','2.000'],['3 gb cpu 90%','3.000'],['4 gb cpu 130%','4.000'],['5 gb cpu 160%','5.000'],['6 gb cpu 190%','6.000'],['7 gb cpu 230%','7.000'],['8 gb cpu 260%','8.000'],['9 gb cpu 290%','9.000'],['10 gb cpu 330%','10.000'],['ram/cpu unlimited','12.000']],
      panels:[['reseller panel','13.000'],['admin panel','15.000'],['partner panel','20.000'],['owner panel','25.000']],
      nokos:[['nokos indo','5.000'],['nokos rusia','18.000'],['nokos ukraina','12.000'],['nokos kazakhstan','28.000'],['nokos china','10.000'],['nokos philipina','7.000'],['nokos myanmar','10.000'],['nokos malaysia','13.000'],['nokos kenya','5.000']],
      partner:['get murid script','get murid band tele','get murid undband tele','get murid undband Whatsapp','get murid logo','get murid band tiktok','get murid rename apk','get murid rename script','get murid up payment','get murid nokos','get murid Malware','get murid backdoor','get murid suntik sosmed','get all apk premium','get script riszzcrashed v6.0','get script HanzXcrash','get all function new','get function fc','get function frez','get function crash beta','get function fc Beta','get function fc wa ori','get function fc wa bisnis','get function crash ios','get function fc ios','get function freze ios','get function delay hard','get all base script','get base wa','get base tele','get base no error','get base button','get base no button','get base kece','get all script','get script obf','get script md','get script ddos','get script jasher','get script backdoor'],
      murid:[['murid band','10.000'],['partner murid band','15.000'],['owner murid band','20.000']],
      scripts:[['riszzcrashed','50.000'],['HanzXcrash','10.000'],['RISZ OBF X MD','25.000'],['RiszXnyenye','40.000']]
    };

    // show/hide after 4s
    setTimeout(()=>{
      document.getElementById('loading').style.display='none';
      document.getElementById('main').style.display='block'
    },4000);

    // handle product buttons
    document.querySelectorAll('[data-target]').forEach(b=>b.addEventListener('click',()=>showDetail(b.getAttribute('data-target'))));
    function showDetail(type){
      const area = document.getElementById('detailArea');
      const inner = document.getElementById('detailInner');
      area.style.display='block';
      let html = '';
      if(type==='hosting'){
        html += '<h3>HOSTING BOT LIST</h3><div class="prod-list">';
        data.hosting.forEach(i=> html+=`<div class="prod-item"><div>${i[0]}</div><div class="price">Rp ${i[1]}</div></div>`);
        html += '<div style="margin-top:8px">';
        data.panels.forEach(i=> html+=`<div class="prod-item"><div>${i[0]}</div><div class="price">Rp ${i[1]}</div></div>`);
        html += '</div></div>';
      }else if(type==='nokos'){
        html += '<h3>LIST NOKOS</h3><div class="prod-list">';
        data.nokos.forEach(i=> html+=`<div class="prod-item"><div>${i[0]}</div><div class="price">Rp ${i[1]}</div></div>`);
        html += '</div><p style="color:#9fb6d1">Keterangan: nokos lainya bisa hubungi owner ya</p>';
      }else if(type==='partner'){
        html += '<h3>PARTNER VVIP</h3><div style="color:#bfe9ff"><ul>';
        data.partner.forEach(i=> html+=`<li>${i}</li>`);
        html += '</ul><p><strong>💎 partner vvip : 10.000</strong></p></div>';
      }else if(type==='murid'){
        html += '<h3>MURID BAND PRIVATE</h3><div class="prod-list">';
        data.murid.forEach(i=> html+=`<div class="prod-item"><div>${i[0]}</div><div class="price">Rp ${i[1]}</div></div>`);
        html += '</div>';
      }else if(type==='allscripts'){
        html += '<h3>ALL SCRIPT LIST</h3><div class="prod-list">';
        data.scripts.forEach(i=> html+=`<div class="prod-item"><div>${i[0]}</div><div class="price">Rp ${i[1]}</div></div>`);
        html += '</div>';
      }
      inner.innerHTML = html + '<div style="margin-top:12px"><button class="btn ghost" onclick="document.getElementById(\'detailArea\').style.display=\'none\'">Kembali</button></div>';
    }

    // payment modal
    const modal = document.getElementById('modalBack');
    document.getElementById('paymentBtn').addEventListener('click',()=>modal.style.display='flex');
    document.getElementById('closeModal').addEventListener('click',()=>{modal.style.display='none';document.getElementById('payDetail').innerHTML=''});
    document.querySelectorAll('[data-pay]').forEach(b=>b.addEventListener('click',()=>{
      const p = b.getAttribute('data-pay');
      const d = document.getElementById('payDetail');
      if(p==='dana') d.innerHTML='<strong>DANA</strong><div style="margin-top:6px">Nomor: <strong>62881036282435</strong></div>';
      if(p==='gopay') d.innerHTML='<strong>GOPAY</strong><div style="margin-top:6px">Nomor: <strong>62881036282435</strong></div>';
      if(p==='qris') d.innerHTML='<strong>QRIS</strong><div style="margin-top:6px">Scan untuk pembayaran</div><div style="margin-top:8px"><img alt="QRIS-placeholder" src="https://files.catbox.moe/rgoew5.jpeg" style="width:100%;border-radius:8px"/></div>';
    }));

    // audio controls top-right
    const audio = new Audio('https://files.catbox.moe/fjio04.m4a');
    document.getElementById('playTop').addEventListener('click',()=>{audio.play();document.getElementById('playTop').textContent='Pause'});
    document.getElementById('stopTop').addEventListener('click',()=>{
      audio.pause();audio.currentTime=0;document.getElementById('playTop').textContent='Play';
    });