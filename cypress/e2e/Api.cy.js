describe(' API', () => {
    let authToken;
    before(() => {
      cy.request({
        method: 'POST',
        url: 'https://candidatex:qa-is-cool@qa-task.backbasecloud.com/api/users/login',
        body: {
          user: {
            email: 'atish.hiring@gmail.com',
            password: 'Jimmy_3231'
          }
        }
      }).then((response) => {
        authToken = response.body.user.token;
      });
    });
    it('Check the current loged in user ', () => {
        cy.request({
          method: 'GET',
          url: 'https://candidatex:qa-is-cool@qa-task.backbasecloud.com/api/user',
          headers: {
            'jwtauthorization': `Token ${authToken}`
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.user.email).to.eq('atish.hiring@gmail.com'); // replace with the expected email
          // you can add more assertions or code to handle the response data here
        });
      });

    it('To get the list of articles and log the response', () => {
        cy.request({
          method: 'GET',
          url: 'https://qa-task.backbasecloud.com/api/articles',
          auth: {
            username: 'candidatex',
            password: 'qa-is-cool'
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          cy.log(response.body);
        });
      });


    it('Login to the api ', () => {
        cy.request('POST', '/api/users/login', {
          user: {
            email: 'atish.hiring@gmail.com',
            password: 'Jimmy_3231'
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.user.username).to.eq('killerbat'); 
          // Get the current user
          cy.request({
            method: 'GET',
            url: '/api/user',
            headers: {
              'jwtauthorization': `Token ${response.body.user.token}`
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.user.username).to.eq('killerbat'); 
          });
        });
      });


      it('retrieve tags and log the response', () => {
        cy.request({
          method: 'GET',
          url: '/',
          auth: {
            username: 'candidatex',
            password: 'qa-is-cool'
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
          cy.log(response.body);
        });
      });


      it('create an article and log the response', () => {    
        cy.request({
            method: 'POST',
            url: 'https://candidatex:qa-is-cool@qa-task.backbasecloud.com/api/articles',
            headers: {
              'Content-Type': 'application/json',
              'jwtauthorization': `Token ${authToken}`
            },
            body: {
              article: {
                title: 'How to train your dragon',
                description: 'Ever wonder how?',
                body: 'You have to believe',
                tagList: ['magic', 'cool', 'dragons']
              }
            }
          }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.article.title).to.equal('How to train your dragon');
            // Add more assertions or handle the response data as required
          });
        })    
    })