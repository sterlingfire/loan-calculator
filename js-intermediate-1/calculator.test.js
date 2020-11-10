it('should calculate the monthly rate correctly', function () {
  expect(calcMonthlyPayment(10000, 10, 0.03)).toEqual("96.56");
});

it('should calculate the monthly rate correctly for large numbers', function () {
  expect(calcMonthlyPayment(1000000, 10, 0.05)).toEqual("10606.55");
});

it('should handle zero principle', function () {
  expect(calcMonthlyPayment(0, 10, 0.03)).toEqual(0);
});

it('should handle zero years', function () {
  expect(calcMonthlyPayment(10000, 0, 0.03)).toEqual(0);
});

it('should handle zero rate', function () {
  expect(calcMonthlyPayment(10000, 10, 0)).toEqual(0);
});
