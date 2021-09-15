import propToStyle from './propToStyle';

describe('propToStyle()', () => {
  describe('when receives an simple argument', () => {
    test('and it is a string', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: 'center' }; // string
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ textAlign: 'center' });
    });
    test('and it is a number', () => {
      const propToStyleResult = propToStyle('flex');
      // <Text flex={1} />
      const componentProps = { flex: 1 }; // number
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when receives an argument with breakpoints', () => {
    test('renders only one breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center' } }; // string
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
    test('renders two or more breakpoint resolutions', () => {
      const propToStyleResult = propToStyle('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: { xs: 'center', md: 'right' } }; // string
      const styleResult = propToStyleResult(componentProps);

      expect(styleResult).toMatchSnapshot();
    });
  });
});
