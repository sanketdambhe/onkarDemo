import { MaterialmodModule } from './materialmod.module';

describe('MaterialmodModule', () => {
  let materialmodModule: MaterialmodModule;

  beforeEach(() => {
    materialmodModule = new MaterialmodModule();
  });

  it('should create an instance', () => {
    expect(materialmodModule).toBeTruthy();
  });
});
