
        let produtos = [ 
            {cod: 1, nome: "Computdor", preco: 1000.00},
            {cod: 2, nome: "Mouse", preco: 30.99},
            {cod: 3, nome: "Teclado", preco: 40.99},
            {cod: 4, nome: "Fonte", preco: 80.00},
            {cod: 5, nome: "Notebook", preco: 1500.00},
        ]

        let t1 = 0;
        let t2 = 0;
        
        function loadProdutos() {
          var obj = document.getElementById('produto');
          produtos.map((i) => {
                var item = document.createElement('option');
                item.value = i.cod;
                item.text = i.nome;
                item.setAttribute('data-valor', i.preco);
                obj.appendChild(item);
          })
        }  
        //incluir produtos
        function addProduto() {
            let tbody = document.getElementById('body');
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');

            td1.innerHTML = p.options[p.selectedIndex].text;
            td2.innerHTML = q.value;
            td3.innerHTML = eval(p.options[p.selectedIndex].dataset.valor + '*'+ q.value);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);

            t1++;
            t2 += eval(p.options[p.selectedIndex].dataset.valor + '*'+ q.value);

            totalitens.innerHTML = t1;
            totalvalor.innerHTML = t2;

            p.selectedIndex = 0;
            q.value = '';
        }

         //abilitar compras
        function enableFields(enable) {

          var elems = Array.from(document.getElementsByClassName('vendaAberta'));
             elems.forEach(i =>{
            if (enable) i.removeAttribute('disabled');
            else i.setAttribute('disabled', true);
          });
        }
  

