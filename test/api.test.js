const chai = require('chai');
const chaiHttp = require('chai-http');
const knex = require("../db/connect");
const app = require("../app");


chai.should();
chai.use(chaiHttp);


describe('Products API', () => {

    /* 
        Route of GET all Product
    */
   describe("GET /api/v1/product", () => {
       it("It should GET all the products", (done) => {
           chai.request(app)
               .get("/api/v1/products/read")
               .end((err, res) => {
                   res.should.have.status(200);
                   res.body.should.be.a('array');
               })
           done();
       });
       it("It should NOT GET all the products", (done) => {
           chai.request(app)
               .get("/api/v1/product/read/")
               .end((err, res) => {
                   res.should.have.status(404);
               });
           done();
       });
   
    });

    /* 
        Route of GET by ID Product
    */
    describe("Get /api/v1/products/read:productID", () => {
        it("It should GET product by ID", (done) => {
            const productId = 1600;
            chai.request(app)
                .get("/api/v1/products/read/" + productId)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('productId');
                    res.body.should.have.property('name');
                    res.body.should.have.property('description');
                    res.body.should.have.property('price');
                    res.body.should.have.property('quantity');
                    res.body.should.have.property('productId').eq(1600);
                });
            done();
        });
    });

});

    /* 
     Route of PUT Product
 */
    /* 
       Route of POST Product
   */
    /* 
        Route of PATCH  Product
    */
    /* 
        Route of DELETE Product
    */



// describe('CRUD Product', () => {

// Run migrations
// before(() => {
//     knex.migrate.latest()
//         .then(() => {
//             // Run seeds
//             return knex.seed.run();

//         }).then(() => done())

// });
    //     it('Lists all Records', async (done) => {
    //         const response = await request(app)
    //             .get('/api/v1/products')
    //             .set('Accept', 'application/json')
    //             .expect('Content-Type', /json/)
    //             .expect(200)
    //             .then((response) => {
    //                 expect(response.body).to.be.a('array');
    //                 console.log(response.body);

    //                 done();

    //             });
    //     });
    // });



