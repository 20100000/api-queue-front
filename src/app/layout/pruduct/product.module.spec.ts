import { ProductModule } from './product.module';

describe('DashboardModule', () => {
    let dashboardModule: ProductModule;

    beforeEach(() => {
        dashboardModule = new ProductModule();
    });

    it('should create an instance', () => {
        expect(dashboardModule).toBeTruthy();
    });
});
