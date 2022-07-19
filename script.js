const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const container = $('.container');
const grid = $('#grid');
const flex = $('#flex');
const filter = $('#filter');

const app = {
    isFlex: true,
    isGrid: false,
    items: [{
        name: 'Meta',
        img: 'data:image/png;base64,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',
        price: 932.6,
    },
    {
        name: 'Google',
        img: 'https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg',
        price: 2000,
    },
    {
        name: 'Microsoft',
        img: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero-M365HP-1920x720:VP1-539x400?qlt=75',
        price: 2500,
    },
    {
        name: 'Apple',
        img: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202204221606',
        price: 2900,
    },
    {
        name: 'Amazon',
        img: 'https://znews-stc.zdn.vn/static/topic/company/amazon.png',
        price: 1700,
    },
    {
        name: 'Tesla',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAeFBMVEX////oISfmAADoFR3nAAzoHCPoGSD++Pj1tLXnCRTnEhrnAAj98vLnABD//Pz74eHwg4X97e7ucnX62dnqSUv2v7/wiov4ycn4zc71sLHsXF7xj5D85ubympvylZbpLTHqP0HvfH7zoaH0qavtaWzrUVTpNDjtZGWKBL6sAAAGH0lEQVRogcWaa7uyKhCGDQXFQ561LNM09f//w42RpohW6xX2/WWtKw6PwDAzoIryC7YbprFRV7fEuwc9dy+5VWcjTsOr/lNPX3F0UyO/NwdH63EcjE3TVHvIX4zpzxo+ZPfKOF33UNTDtHqUBXIsx0TwsA1EWLMwKsp7nbp/Hr7txknTIqCZ8JMgK29a4FBmt9/F/bDqSgzwxyFuqTsARUHt2l9q6m7+KICl/l1yIq4CUAb1Z5uzjaAF2oYmUqkhWdSW+r+9mW20gKoFSi/dkL5WGQD8HpCJNUBQyyzwblV9NgbOdX7xgqx8FmvYRFxtE4BHzZ1x91YAh9NIxaQ/s/H6HbI9XbqbnvN7ZBF5njoZdlT7jGhVALwYKCKSh+5ihJ9Wh9EP6yQjA1yKE1OLzqO0b0TYYUShqgG1u8T+8TfNkePVSDKL7AhWWsNZ3M9bGBwsppCMs+jykF2Oo391T2u7wg/dq8085NE+XTIITGZMqlV4vlKD+c8I4CY5Tdfh6LunOumaqC0Q6FZkWw0WZdQ8yKrMd6yfkiXX5iODIFV0PBM9NLX7bmRf0/zRtMSysIpg77fAhTurHemFlCPVAcBps6AK/bcR6uEtQtNJRS35NRmEoaY2Z3dSOw9KYpvq3GmBM0c3AbPh9I7S6X3VWzusSnM0IsvoJ8J8/o9BW79DSZh3zor/cJbmXQNOPUQ2Dgyq90DCG7SeWrClD+uQ+QXe2J1uBBZ3Kw+jYW3rZK3VPZBtAb14rJk+ABk0MOjKIxAZQ4lfR8Q3r/bz7Kuc262/3Pmz5yRbuTOGGT8ST1G+/h8dg39uNgY6goOp7LHcfszXsLt4kI5PzHQ9oPZZtMe6TZo98OcGBFMrPI7j888lXfSvAO8lu/FsigvEuInnLt5PCvBTvAWD6cdfy/YgUFZT5RB8N8HvZy+obbk/yRLMdrYbfntsAs76Znrxa1YCXGVGxRWGKnYsMDDvoHeY2cym0Fizzz75sowtK8plIYyIv3nc6vgUXn2dTOuVETYY94ga/XjUbf8apkaVkNSFDa6kTbq06HzeLQk9xtwx2cykqt68hXqfd3ityrmxQp4scR9T47Iyly0/ZszcMfvOyRddpi2eVl9JXMJSG+poHqfc297gvNHY3SgMMn9Z/qp1f0VJkxve63X//+yY16/f0qk28XI2JqTlc80Ad0ZO25sNcXMxo28EQfYhOdRzk4TFjFtmb+quNSogtAqDWzavmAB+MqMc2y0vYSb8/jqAq++yUv0S8wseWxFPq/mN8pXff+CyZdB8m9gFY2uBwV9T/M9sRR94ECarKBu66kpGvwvlukHj2+fmf+a+bljWF1v0z1TrORwb0HclXV9gIFBW8Vd1YSFSd92gzeBz43+gWcs7nUqobrJmWNqKS9+Js7ai6+xyHbrKaU3XFCqr2A5fFkVidZUD31NiXh64Jx0/9Av1kj05f6Lx4vyxMzE/l4WrufFOhNx5ft3QCIR/8lT5OeyelDxP6YgM+pQ7z1MCsV6y58wzLFNcDjvAOyTBQrQ5k1yWZ86ivaTSX88tDVpw0KdwQr8lNuhTLktPubylEQDnqguJzGEHwoUuLL99B/gv+AtPuXLS35uFYQkP+pQHe0gCooM+pWI9pcCT/pSFpxQe9CnM/SjJJQV8ysDBZjyl+pAiS3LKuUFLCPoU5n5UQtCnnJkLcLFHozdzTwkPMrxkjz+LSCgTd2E2R4+mhmXeP7fYiWCavGsygj7lNs1lpQR9yiz0A1lmNfeUwxs7GegTxyH0PpRlEvpN/jsBMUw8pcX7vkEU1ftaR1LQp0xCv8Dr/SX6qCv+pD9jjPyqjKPRmzH0b7/2253RU0oL+hRjyGWlBX3K+CZJ6PU+h5cuLCXrvg5nEoM+JaCecu0lqDAqmmNp3C8UBBJTD23JORq9udKNJPh6n8NznlEjXfeZy2KZQZ/i9Z5S+PX+kqenFH69v+T0jAzyctgBH0oP+hTiKU1ZJ/0pnSrzaPTm5nC/fBIOOSSpMnPYgVCFrXxzVhS7VSVc73OINNlBnxJwP/0WTy3xpD/lJPQTlXVcSfehLPb/Y1aK8v+YFTmN/kPb/wDzC1IgkqQBKAAAAABJRU5ErkJggg==',
        price: 1100,
    },
    ],

    render: function () {
        const htmls = this.items.map((i, index) => {
            return `
        <div class="box">
        <div class="image">
          <img
            src="${i.img}"
            alt="${i.name}"
          />
        </div>
        <div class="name">${i.name}</div>

        <p>
          Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione
          disuja doloremque reiciendi nemo.
        </p>
        <p>
          Caps: ${i.price} billion USD
        </p>
        <div class="btns">
          <button>Read More</button>
          <button>Subscribe</button>
        </div>
      </div>
        `
        })
        container.innerHTML = htmls.join('');
    },

    handle: function () {
        grid.onclick = function () {
            if (app.isGrid == false) {
                app.isGrid = true;
                app.isFlex = false;
                container.classList.add('grid');
                flex.classList.remove('active');
                grid.classList.add('active');
            }
        }
        flex.onclick = function () {
            if (app.isFlex == false) {
                app.isFlex = true;
                app.isGrid = false;
                container.classList.remove('grid');
                grid.classList.remove('active');
                flex.classList.add('active')
            }
        }

        filter.onchange = function () {
            app.sortItems(filter.value);
            app.render();
        }
    },

    sortItems: function (flag) {
        if(flag == 1){
            this.items.sort((a, b) => a.name.localeCompare(b.name));
        }
        else if(flag == 2){
            this.items.sort((a, b) => b.name.localeCompare(a.name));
        }
        else if (flag == 3){
            this.items.sort((a, b) => a.price - b.price);
        }
        else 
        this.items.sort((a, b) => b.price - a.price);
    },

    start: function () {
        this.render();

        this.handle();
    }
}

app.start();