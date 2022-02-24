/*Автоматизировать процесс создания обмена на https://changenow.io/.
Оформить на гитхабе, открыть доступ. Использовать JS + Cypress io*/
describe("Exchange", () => {
    it("Exchange crypto", () => {
        cy.visit('https://changenow.io/')
        cy.viewport(1366, 768)
        cy.wait(2500)
        cy.get('.new-stepper-button').contains('Exchange').click()
    }) 
    it("Exchange Details", () => {
        cy.viewport(1366, 768)
        cy.wait(2500) 
        cy.get('input[type="text"]').type('numberWallet')
        cy.get('.now-button').contains('Next').click()
    })
})
/*Если ввести корректное значение кошелька,
то можно пойти дальше и автоматизировать 
Confirm the Exchange" и Complete the Exchange.
А также в далнейшем можно добавить ввод своих значений для обмена и выбор 
необходимой криптовалюты для обмена */