import { RouterMainModule } from './router-main.module';

describe('RouterMainModule', () => {
  let routerMainModule: RouterMainModule;

  beforeEach(() => {
    routerMainModule = new RouterMainModule();
  });

  it('should create an instance', () => {
    expect(routerMainModule).toBeTruthy();
  });
});
