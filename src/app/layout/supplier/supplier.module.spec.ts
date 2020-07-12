import { SupplierModule } from './supplier.module';

describe('SupplierModule', () => {
    let blankPageModule: SupplierModule;

    beforeEach(() => {
        blankPageModule = new SupplierModule();
    });

    it('should create an instance', () => {
        expect(SupplierModule).toBeTruthy();
    });
});
