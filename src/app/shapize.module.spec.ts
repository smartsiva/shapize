import { ShapizeModule } from './shapize.module';

describe('ShapizeModule', () => {
  let shapizeModule: ShapizeModule;

  beforeEach(() => {
    shapizeModule = new ShapizeModule();
  });

  it('should create an instance', () => {
    expect(shapizeModule).toBeTruthy();
  });
});
