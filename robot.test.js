const { newRobot, station, isWorkday, prioritizeTasks }  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {

  // arrange
  const foreignRobot = newRobot(true, true, false);
  const expectedResult = 1;

  // act
  const result = station(foreignRobot);

  // assert
  expect(result).toEqual(expectedResult);

});


test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {

  // arrange
  const vintageRobot = newRobot(true, false, true);
  const expectedResult = 2;

  // act
  const result = station(vintageRobot);

  // assert
  expect(result).toEqual(expectedResult);

});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  const standardRobot = newRobot(true, false, false);
  const expectedResult = 3;

  // act
  const result = station(standardRobot);

  // assert
  expect(result).toEqual(expectedResult);

});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  const goodConditionRobot = newRobot(false, false, false);
  const expectedResult = 4;

  // act
  const result = station(goodConditionRobot);

  // assert
  expect(result).toEqual(expectedResult);

});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  const robot = newRobot(false, false, false);
  const expectedResult = -1;

  // act
  const result = prioritizeTasks(robot);

  // assert
  expect(result).toEqual(expectedResult);

})

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  const robot = newRobot(false, false, false);
  robot.todos = [1, 2, 3, 4, 5];
  const expectedResult = 5;

  // act
  const result = prioritizeTasks(robot);

  // assert
  expect(result).toEqual(expectedResult);

});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  const robot = newRobot(true, false, true);
  const expectedResult = false;

  // act
  const result = isWorkday(robot);

  // assert
  expect(result).toEqual(expectedResult);

});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  const robot = newRobot(true, true, false);
  robot.dayOff = false;
  const expectedResult = true;

  // act
  const result = isWorkday(robot);

  // assert
  expect(result).toEqual(expectedResult);
});
