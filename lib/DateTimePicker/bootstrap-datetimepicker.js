"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ! version : 4.15.35
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
/*
 The MIT License (MIT)

 Copyright (c) 2015 Jonathan Peterson

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/* Adapted by Yannick Bochatay*/

/*eslint-disable*/

function DateTimePicker(element, _options) {

  var picker = {};

  var datePickerModes = [{
    clsName: 'days',
    navFnc: 'M',
    navStep: 1
  }, {
    clsName: 'months',
    navFnc: 'y',
    navStep: 1
  }, {
    clsName: 'years',
    navFnc: 'y',
    navStep: 10
  }, {
    clsName: 'decades',
    navFnc: 'y',
    navStep: 100
  }];

  var viewModes = ['days', 'months', 'years', 'decades'];

  var verticalModes = ['top', 'bottom', 'auto'];

  var horizontalModes = ['left', 'right', 'auto'];

  var toolbarPlacements = ['default', 'top', 'bottom'];

  var keyMap = {
    'up': 38,
    38: 'up',
    'down': 40,
    40: 'down',
    'left': 37,
    37: 'left',
    'right': 39,
    39: 'right',
    'tab': 9,
    9: 'tab',
    'escape': 27,
    27: 'escape',
    'enter': 13,
    13: 'enter',
    'pageUp': 33,
    33: 'pageUp',
    'pageDown': 34,
    34: 'pageDown',
    'shift': 16,
    16: 'shift',
    'control': 17,
    17: 'control',
    'space': 32,
    32: 'space',
    't': 84,
    84: 't',
    'delete': 46,
    46: 'delete'
  };

  var keyState = {};

  var _date = (0, _moment2.default)().startOf('d'),
      _viewDate = _date.clone(),
      unset = true,
      input = void 0,
      component = false,
      widget = false,
      use24Hours = void 0,
      minViewModeNumber = 0,
      actualFormat = void 0,
      parseFormats = void 0,
      currentViewMode = void 0;

  /////////////////////////////////////////////////////////
  //Private functions
  /////////////////////////////////////////////////////////

  function isEnabled(granularity) {
    if (typeof granularity !== 'string' || granularity.length > 1) {
      throw new TypeError('isEnabled expects a single character string parameter');
    }
    switch (granularity) {
      case 'y':
        return actualFormat.indexOf('Y') !== -1;
      case 'M':
        return actualFormat.indexOf('M') !== -1;
      case 'd':
        return actualFormat.toLowerCase().indexOf('d') !== -1;
      case 'h':
      case 'H':
        return actualFormat.toLowerCase().indexOf('h') !== -1;
      case 'm':
        return actualFormat.indexOf('m') !== -1;
      case 's':
        return actualFormat.indexOf('s') !== -1;
      default:
        return false;
    }
  }

  function hasTime() {
    return isEnabled('h') || isEnabled('m') || isEnabled('s');
  }

  function hasDate() {
    return isEnabled('y') || isEnabled('M') || isEnabled('d');
  }

  function getDatePickerTemplate() {
    var headTemplate = (0, _jquery2.default)('<thead>').append((0, _jquery2.default)('<tr>').append((0, _jquery2.default)('<th>').addClass('prev').attr('data-action', 'previous').append((0, _jquery2.default)('<span>').addClass(_options.icons.previous))).append((0, _jquery2.default)('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', _options.calendarWeeks ? '6' : '5')).append((0, _jquery2.default)('<th>').addClass('next').attr('data-action', 'next').append((0, _jquery2.default)('<span>').addClass(_options.icons.next)))),
        contTemplate = (0, _jquery2.default)('<tbody>').append((0, _jquery2.default)('<tr>').append((0, _jquery2.default)('<td>').attr('colspan', _options.calendarWeeks ? '8' : '7')));

    return [(0, _jquery2.default)('<div>').addClass('datepicker-days').append((0, _jquery2.default)('<table>').addClass('table-condensed').append(headTemplate).append((0, _jquery2.default)('<tbody>'))), (0, _jquery2.default)('<div>').addClass('datepicker-months').append((0, _jquery2.default)('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone())), (0, _jquery2.default)('<div>').addClass('datepicker-years').append((0, _jquery2.default)('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone())), (0, _jquery2.default)('<div>').addClass('datepicker-decades').append((0, _jquery2.default)('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone()))];
  }

  function getTimePickerMainTemplate() {

    var topRow = (0, _jquery2.default)('<tr>'),
        middleRow = (0, _jquery2.default)('<tr>'),
        bottomRow = (0, _jquery2.default)('<tr>');

    if (isEnabled('h')) {

      topRow.append((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<a>').attr({
        href: '#',
        tabindex: '-1',
        'title': 'Increment Hour'
      }).addClass('btn').attr('data-action', 'incrementHours').append((0, _jquery2.default)('<span>').addClass(_options.icons.up))));

      middleRow.append((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<span>').addClass('timepicker-hour').attr({ 'data-time-component': 'hours', 'title': 'Pick Hour' }).attr('data-action', 'showHours')));
      bottomRow.append((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<a>').attr({ href: '#', tabindex: '-1', 'title': 'Decrement Hour' }).addClass('btn').attr('data-action', 'decrementHours').append((0, _jquery2.default)('<span>').addClass(_options.icons.down))));
    }

    if (isEnabled('m')) {
      if (isEnabled('h')) {
        topRow.append((0, _jquery2.default)('<td>').addClass('separator'));
        middleRow.append((0, _jquery2.default)('<td>').addClass('separator').html(':'));
        bottomRow.append((0, _jquery2.default)('<td>').addClass('separator'));
      }
      topRow.append((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<a>').attr({ href: '#', tabindex: '-1', 'title': 'Increment Minute' }).addClass('btn').attr('data-action', 'incrementMinutes').append((0, _jquery2.default)('<span>').addClass(_options.icons.up))));
      middleRow.append((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<span>').addClass('timepicker-minute').attr({ 'data-time-component': 'minutes', 'title': 'Pick Minute' }).attr('data-action', 'showMinutes')));
      bottomRow.append((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<a>').attr({ href: '#', tabindex: '-1', 'title': 'Decrement Minute' }).addClass('btn').attr('data-action', 'decrementMinutes').append((0, _jquery2.default)('<span>').addClass(_options.icons.down))));
    }

    if (isEnabled('s')) {
      if (isEnabled('m')) {
        topRow.append((0, _jquery2.default)('<td>').addClass('separator'));
        middleRow.append((0, _jquery2.default)('<td>').addClass('separator').html(':'));
        bottomRow.append((0, _jquery2.default)('<td>').addClass('separator'));
      }
      topRow.append((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<a>').attr({ href: '#', tabindex: '-1', 'title': 'Increment Second' }).addClass('btn').attr('data-action', 'incrementSeconds').append((0, _jquery2.default)('<span>').addClass(_options.icons.up))));
      middleRow.append((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<span>').addClass('timepicker-second').attr({ 'data-time-component': 'seconds', 'title': 'Pick Second' }).attr('data-action', 'showSeconds')));
      bottomRow.append((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<a>').attr({ href: '#', tabindex: '-1', 'title': 'Decrement Second' }).addClass('btn').attr('data-action', 'decrementSeconds').append((0, _jquery2.default)('<span>').addClass(_options.icons.down))));
    }

    if (!use24Hours) {
      topRow.append((0, _jquery2.default)('<td>').addClass('separator'));
      middleRow.append((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<button>').addClass('btn btn-primary').attr({ 'data-action': 'togglePeriod', tabindex: '-1', 'title': 'Toggle Period' })));
      bottomRow.append((0, _jquery2.default)('<td>').addClass('separator'));
    }

    return (0, _jquery2.default)('<div>').addClass('timepicker-picker').append((0, _jquery2.default)('<table>').addClass('table-condensed').append([topRow, middleRow, bottomRow]));
  }

  function getTimePickerTemplate() {
    var hoursView = (0, _jquery2.default)('<div>').addClass('timepicker-hours').append((0, _jquery2.default)('<table>').addClass('table-condensed')),
        minutesView = (0, _jquery2.default)('<div>').addClass('timepicker-minutes').append((0, _jquery2.default)('<table>').addClass('table-condensed')),
        secondsView = (0, _jquery2.default)('<div>').addClass('timepicker-seconds').append((0, _jquery2.default)('<table>').addClass('table-condensed')),
        ret = [getTimePickerMainTemplate()];

    if (isEnabled('h')) {
      ret.push(hoursView);
    }
    if (isEnabled('m')) {
      ret.push(minutesView);
    }
    if (isEnabled('s')) {
      ret.push(secondsView);
    }

    return ret;
  }

  function getToolbar() {

    var row = [];

    if (_options.showTodayButton) {
      row.push((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<a>').attr({ 'data-action': 'today', 'title': _options.tooltips.today }).append((0, _jquery2.default)('<span>').addClass(_options.icons.today))));
    }
    if (!_options.sideBySide && hasDate() && hasTime()) {
      row.push((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<a>').attr({ 'data-action': 'togglePicker', 'title': 'Select Time' }).append((0, _jquery2.default)('<span>').addClass(_options.icons.time))));
    }
    if (_options.showClear) {
      row.push((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<a>').attr({ 'data-action': 'clear', 'title': _options.tooltips.clear }).append((0, _jquery2.default)('<span>').addClass(_options.icons.clear))));
    }
    if (_options.showClose) {
      row.push((0, _jquery2.default)('<td>').append((0, _jquery2.default)('<a>').attr({ 'data-action': 'close', 'title': _options.tooltips.close }).append((0, _jquery2.default)('<span>').addClass(_options.icons.close))));
    }
    return (0, _jquery2.default)('<table>').addClass('table-condensed').append((0, _jquery2.default)('<tbody>').append((0, _jquery2.default)('<tr>').append(row)));
  }

  function getTemplate() {

    var template = (0, _jquery2.default)('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
        dateView = (0, _jquery2.default)('<div>').addClass('datepicker').append(getDatePickerTemplate()),
        timeView = (0, _jquery2.default)('<div>').addClass('timepicker').append(getTimePickerTemplate()),
        content = (0, _jquery2.default)('<ul>').addClass('list-unstyled'),
        toolbar = (0, _jquery2.default)('<li>').addClass('picker-switch' + (_options.collapse ? ' accordion-toggle' : '')).append(getToolbar());

    if (_options.inline) template.removeClass('dropdown-menu');

    if (use24Hours) template.addClass('usetwentyfour');

    if (isEnabled('s') && !use24Hours) template.addClass('wider');

    if (_options.sideBySide && hasDate() && hasTime()) {

      template.addClass('timepicker-sbs');

      if (_options.toolbarPlacement === 'top') template.append(toolbar);

      template.append((0, _jquery2.default)('<div>').addClass('row').append(dateView.addClass('col-md-6')).append(timeView.addClass('col-md-6')));

      if (_options.toolbarPlacement === 'bottom') template.append(toolbar);

      return template;
    }

    if (_options.toolbarPlacement === 'top') content.append(toolbar);

    if (hasDate()) {
      content.append((0, _jquery2.default)('<li>').addClass(_options.collapse && hasTime() ? 'collapse in' : '').append(dateView));
    }
    if (_options.toolbarPlacement === 'default') {
      content.append(toolbar);
    }
    if (hasTime()) {
      content.append((0, _jquery2.default)('<li>').addClass(_options.collapse && hasDate() ? 'collapse' : '').append(timeView));
    }
    if (_options.toolbarPlacement === 'bottom') {
      content.append(toolbar);
    }
    return template.append(content);
  }

  function dataToOptions() {

    var eData = void 0,
        dataOptions = {};

    if (element.is('input') || _options.inline) eData = element.data();else eData = element.find('input').data();

    if (eData.dateOptions && eData.dateOptions instanceof Object) {
      dataOptions = _jquery2.default.extend(true, dataOptions, eData.dateOptions);
    }

    _jquery2.default.each(_options, function (key) {

      var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);

      if (eData[attributeName] !== undefined) {
        dataOptions[key] = eData[attributeName];
      }
    });

    return dataOptions;
  }

  function place() {

    var position = (component || element).position(),
        offset = (component || element).offset();

    var vertical = _options.widgetPositioning.vertical,
        horizontal = _options.widgetPositioning.horizontal,
        parent = void 0;

    if (_options.widgetParent) {
      parent = _options.widgetParent.append(widget);
    } else if (element.is('input')) {
      parent = element.after(widget).parent();
    } else if (_options.inline) {
      parent = element.append(widget);
      return;
    } else {
      parent = element;
      element.children().first().after(widget);
    }

    // Top and bottom logic
    if (vertical === 'auto') {
      if (offset.top + widget.height() * 1.5 >= (0, _jquery2.default)(window).height() + (0, _jquery2.default)(window).scrollTop() && widget.height() + element.outerHeight() < offset.top) {
        vertical = 'top';
      } else {
        vertical = 'bottom';
      }
    }

    // Left and right logic
    if (horizontal === 'auto') {
      if (parent.width() < offset.left + widget.outerWidth() / 2 && offset.left + widget.outerWidth() > (0, _jquery2.default)(window).width()) {
        horizontal = 'right';
      } else {
        horizontal = 'left';
      }
    }

    if (vertical === 'top') {
      widget.addClass('top').removeClass('bottom');
    } else {
      widget.addClass('bottom').removeClass('top');
    }

    if (horizontal === 'right') {
      widget.addClass('pull-right');
    } else {
      widget.removeClass('pull-right');
    }

    // find the first parent element that has a relative css positioning
    if (parent.css('position') !== 'relative') {

      parent = parent.parents().filter(function isRelative() {
        return (0, _jquery2.default)(this).css('position') === 'relative';
      }).first();
    }

    if (parent.length === 0) {
      throw new Error('datetimepicker component should be placed within a relative positioned container');
    }

    widget.css({
      top: vertical === 'top' ? 'auto' : position.top + element.outerHeight(),
      bottom: vertical === 'top' ? position.top + element.outerHeight() : 'auto',
      left: horizontal === 'left' ? parent === element ? 0 : position.left : 'auto',
      right: horizontal === 'left' ? 'auto' : parent.outerWidth() - element.outerWidth() - (parent === element ? 0 : position.left)
    });
  }

  function notifyEvent(e) {
    if (e.type === 'dp.change' && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate)) {
      return;
    }
    element.trigger(e);
  }

  function viewUpdate(e) {

    if (e === 'y') e = 'YYYY';

    notifyEvent({
      type: 'dp.update',
      change: e,
      viewDate: _viewDate.clone()
    });
  }

  function showMode(dir) {

    if (!widget) return;

    if (dir) {
      currentViewMode = Math.max(minViewModeNumber, Math.min(3, currentViewMode + dir));
    }
    widget.find('.datepicker > div').hide().filter('.datepicker-' + datePickerModes[currentViewMode].clsName).show();
  }

  function fillDow() {

    var row = (0, _jquery2.default)('<tr>'),
        currentDate = _viewDate.clone().startOf('w').startOf('d');

    if (_options.calendarWeeks === true) {
      row.append((0, _jquery2.default)('<th>').addClass('cw').text('#'));
    }

    while (currentDate.isBefore(_viewDate.clone().endOf('w'))) {
      row.append((0, _jquery2.default)('<th>').addClass('dow').text(currentDate.format('dd')));
      currentDate.add(1, 'd');
    }
    widget.find('.datepicker-days thead').append(row);
  }

  function isInDisabledDates(testDate) {
    return _options.disabledDates[testDate.format('YYYY-MM-DD')] === true;
  }

  function isInEnabledDates(testDate) {
    return _options.enabledDates[testDate.format('YYYY-MM-DD')] === true;
  }

  function isInDisabledHours(testDate) {
    return _options.disabledHours[testDate.format('H')] === true;
  }

  function isInEnabledHours(testDate) {
    return _options.enabledHours[testDate.format('H')] === true;
  }

  function isValid(targetMoment, granularity) {

    var found = void 0;

    if (!targetMoment.isValid()) {
      return false;
    }
    if (_options.disabledDates && granularity === 'd' && isInDisabledDates(targetMoment)) {
      return false;
    }
    if (_options.enabledDates && granularity === 'd' && !isInEnabledDates(targetMoment)) {
      return false;
    }
    if (_options.minDate && targetMoment.isBefore(_options.minDate, granularity)) {
      return false;
    }
    if (_options.maxDate && targetMoment.isAfter(_options.maxDate, granularity)) {
      return false;
    }
    if (_options.daysOfWeekDisabled && granularity === 'd' && _options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
      return false;
    }
    if (_options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && isInDisabledHours(targetMoment)) {
      return false;
    }
    if (_options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !isInEnabledHours(targetMoment)) {
      return false;
    }
    if (_options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {

      found = false;

      _jquery2.default.each(_options.disabledTimeIntervals, function search() {

        if (targetMoment.isBetween(this[0], this[1])) {
          found = true;
          return false;
        }
      });

      if (found) return false;
    }
    return true;
  }

  function fillMonths() {

    var spans = [],
        monthsShort = _viewDate.clone().startOf('y').startOf('d');

    while (monthsShort.isSame(_viewDate, 'y')) {
      spans.push((0, _jquery2.default)('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
      monthsShort.add(1, 'M');
    }
    widget.find('.datepicker-months td').empty().append(spans);
  }

  function updateMonths() {

    var monthsView = widget.find('.datepicker-months'),
        monthsViewHeader = monthsView.find('th'),
        months = monthsView.find('tbody').find('span');

    monthsViewHeader.eq(0).find('span').attr('title', _options.tooltips.prevYear);
    monthsViewHeader.eq(1).attr('title', _options.tooltips.selectYear);
    monthsViewHeader.eq(2).find('span').attr('title', _options.tooltips.nextYear);

    monthsView.find('.disabled').removeClass('disabled');

    if (!isValid(_viewDate.clone().subtract(1, 'y'), 'y')) {
      monthsViewHeader.eq(0).addClass('disabled');
    }

    monthsViewHeader.eq(1).text(_viewDate.year());

    if (!isValid(_viewDate.clone().add(1, 'y'), 'y')) {
      monthsViewHeader.eq(2).addClass('disabled');
    }

    months.removeClass('active');
    if (_date.isSame(_viewDate, 'y') && !unset) {
      months.eq(_date.month()).addClass('active');
    }

    months.each(function addClassDisable(index) {

      if (!isValid(_viewDate.clone().month(index), 'M')) {
        (0, _jquery2.default)(this).addClass('disabled');
      }
    });
  }

  function updateYears() {

    var yearsView = widget.find('.datepicker-years'),
        yearsViewHeader = yearsView.find('th'),
        startYear = _viewDate.clone().subtract(5, 'y'),
        endYear = _viewDate.clone().add(6, 'y');

    var html = '';

    yearsViewHeader.eq(0).find('span').attr('title', _options.tooltips.nextDecade);
    yearsViewHeader.eq(1).attr('title', _options.tooltips.selectDecade);
    yearsViewHeader.eq(2).find('span').attr('title', _options.tooltips.prevDecade);

    yearsView.find('.disabled').removeClass('disabled');

    if (_options.minDate && _options.minDate.isAfter(startYear, 'y')) {
      yearsViewHeader.eq(0).addClass('disabled');
    }

    yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());

    if (_options.maxDate && _options.maxDate.isBefore(endYear, 'y')) {
      yearsViewHeader.eq(2).addClass('disabled');
    }

    while (!startYear.isAfter(endYear, 'y')) {
      html += '<span data-action="selectYear" class="year' + (startYear.isSame(_date, 'y') && !unset ? ' active' : '') + (!isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
      startYear.add(1, 'y');
    }

    yearsView.find('td').html(html);
  }

  function updateDecades() {

    var decadesView = widget.find('.datepicker-decades'),
        decadesViewHeader = decadesView.find('th'),
        startDecade = _viewDate.isBefore((0, _moment2.default)({ y: 1999 })) ? (0, _moment2.default)({ y: 1899 }) : (0, _moment2.default)({ y: 1999 }),
        endDecade = startDecade.clone().add(100, 'y');

    var html = '';

    decadesViewHeader.eq(0).find('span').attr('title', _options.tooltips.prevCentury);
    decadesViewHeader.eq(2).find('span').attr('title', _options.tooltips.nextCentury);

    decadesView.find('.disabled').removeClass('disabled');

    if (startDecade.isSame((0, _moment2.default)({ y: 1900 })) || _options.minDate && _options.minDate.isAfter(startDecade, 'y')) {
      decadesViewHeader.eq(0).addClass('disabled');
    }

    decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());

    if (startDecade.isSame((0, _moment2.default)({ y: 2000 })) || _options.maxDate && _options.maxDate.isBefore(endDecade, 'y')) {
      decadesViewHeader.eq(2).addClass('disabled');
    }

    while (!startDecade.isAfter(endDecade, 'y')) {
      html += '<span data-action="selectDecade" class="decade' + (startDecade.isSame(_date, 'y') ? ' active' : '') + (!isValid(startDecade, 'y') ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() + 1) + ' - ' + (startDecade.year() + 12) + '</span>';
      startDecade.add(12, 'y');
    }
    html += '<span></span><span></span><span></span>'; //push the dangling block over, at least this way it's even

    decadesView.find('td').html(html);
  }

  function fillDate() {

    var daysView = widget.find('.datepicker-days'),
        daysViewHeader = daysView.find('th'),
        html = [];

    if (!hasDate()) return;

    daysViewHeader.eq(0).find('span').attr('title', _options.tooltips.prevMonth);
    daysViewHeader.eq(1).attr('title', _options.tooltips.selectMonth);
    daysViewHeader.eq(2).find('span').attr('title', _options.tooltips.nextMonth);

    daysView.find('.disabled').removeClass('disabled');
    daysViewHeader.eq(1).text(_viewDate.format(_options.dayViewHeaderFormat));

    if (!isValid(_viewDate.clone().subtract(1, 'M'), 'M')) {
      daysViewHeader.eq(0).addClass('disabled');
    }
    if (!isValid(_viewDate.clone().add(1, 'M'), 'M')) {
      daysViewHeader.eq(2).addClass('disabled');
    }

    var currentDate = _viewDate.clone().startOf('M').startOf('w').startOf('d');

    var row = (0, _jquery2.default)('<tr>');

    for (var i = 0; i < 42; i++) {
      //always display 42 days (should show 6 weeks)

      if (currentDate.weekday() === 0) {

        row = (0, _jquery2.default)('<tr>');

        if (_options.calendarWeeks) {
          row.append('<td class="cw">' + currentDate.week() + '</td>');
        }

        html.push(row);
      }

      var clsName = '';

      if (currentDate.isBefore(_viewDate, 'M')) clsName += ' old';
      if (currentDate.isAfter(_viewDate, 'M')) clsName += ' new';
      if (currentDate.isSame(_date, 'd') && !unset) clsName += ' active';
      if (!isValid(currentDate, 'd')) clsName += ' disabled';
      if (currentDate.isSame((0, _moment2.default)(), 'd')) clsName += ' today';
      if (currentDate.day() === 0 || currentDate.day() === 6) clsName += ' weekend';

      row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="day' + clsName + '">' + currentDate.date() + '</td>');
      currentDate.add(1, 'd');
    }

    daysView.find('tbody').empty().append(html);

    updateMonths();

    updateYears();

    updateDecades();
  }

  function fillHours() {

    var table = widget.find('.timepicker-hours table'),
        currentHour = _viewDate.clone().startOf('d'),
        html = [];

    var row = (0, _jquery2.default)('<tr>');

    if (_viewDate.hour() > 11 && !use24Hours) {
      currentHour.hour(12);
    }
    while (currentHour.isSame(_viewDate, 'd') && (use24Hours || _viewDate.hour() < 12 && currentHour.hour() < 12 || _viewDate.hour() > 11)) {
      if (currentHour.hour() % 4 === 0) {
        row = (0, _jquery2.default)('<tr>');
        html.push(row);
      }
      row.append('<td data-action="selectHour" class="hour' + (!isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(use24Hours ? 'HH' : 'hh') + '</td>');
      currentHour.add(1, 'h');
    }
    table.empty().append(html);
  }

  function fillMinutes() {

    var table = widget.find('.timepicker-minutes table'),
        currentMinute = _viewDate.clone().startOf('h'),
        html = [],
        step = _options.stepping === 1 ? 5 : _options.stepping;

    var row = (0, _jquery2.default)('<tr>');

    while (_viewDate.isSame(currentMinute, 'h')) {
      if (currentMinute.minute() % (step * 4) === 0) {
        row = (0, _jquery2.default)('<tr>');
        html.push(row);
      }
      row.append('<td data-action="selectMinute" class="minute' + (!isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
      currentMinute.add(step, 'm');
    }
    table.empty().append(html);
  }

  function fillSeconds() {

    var table = widget.find('.timepicker-seconds table'),
        currentSecond = _viewDate.clone().startOf('m'),
        html = [];

    var row = (0, _jquery2.default)('<tr>');

    while (_viewDate.isSame(currentSecond, 'm')) {
      if (currentSecond.second() % 20 === 0) {
        row = (0, _jquery2.default)('<tr>');
        html.push(row);
      }
      row.append('<td data-action="selectSecond" class="second' + (!isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
      currentSecond.add(5, 's');
    }

    table.empty().append(html);
  }

  function fillTime() {

    var timeComponents = widget.find('.timepicker span[data-time-component]');

    if (!use24Hours) {

      var togglePeriod = widget.find('.timepicker [data-action=togglePeriod]');
      var newDate = _date.clone().add(_date.hours() >= 12 ? -12 : 12, 'h');

      togglePeriod.text(_date.format('A'));

      if (isValid(newDate, 'h')) {
        togglePeriod.removeClass('disabled');
      } else {
        togglePeriod.addClass('disabled');
      }
    }

    timeComponents.filter('[data-time-component=hours]').text(_date.format(use24Hours ? 'HH' : 'hh'));
    timeComponents.filter('[data-time-component=minutes]').text(_date.format('mm'));
    timeComponents.filter('[data-time-component=seconds]').text(_date.format('ss'));

    fillHours();
    fillMinutes();
    fillSeconds();
  }

  function update() {

    if (!widget) return;

    fillDate();
    fillTime();
  }

  function setValue(targetMoment) {

    var oldDate = unset ? null : _date;

    // case of calling setValue(null or false)
    if (!targetMoment) {

      unset = true;

      input.val('');

      element.data('date', '');

      notifyEvent({
        type: 'dp.change',
        date: false,
        oldDate: oldDate
      });

      update();

      return;
    }

    targetMoment = targetMoment.clone().locale(_options.locale);

    if (_options.stepping !== 1) {
      targetMoment.minutes(Math.round(targetMoment.minutes() / _options.stepping) * _options.stepping % 60).seconds(0);
    }

    if (isValid(targetMoment)) {

      _date = targetMoment;

      _viewDate = _date.clone();

      input.val(_date.format(actualFormat));

      element.data('date', _date.format(actualFormat));

      unset = false;

      update();

      notifyEvent({
        type: 'dp.change',
        date: _date.clone(),
        oldDate: oldDate
      });
    } else {

      if (!_options.keepInvalid) {
        input.val(unset ? '' : _date.format(actualFormat));
      }

      notifyEvent({
        type: 'dp.error',
        date: targetMoment
      });
    }
  }

  function hide() {
    ///<summary>Hides the widget. Possibly will emit dp.hide</summary>
    var transitioning = false;

    if (!widget) {
      return picker;
    }
    // Ignore event if in the middle of a picker transition
    widget.find('.collapse').each(function searchCollapse() {

      var collapseData = (0, _jquery2.default)(this).data('collapse');

      if (collapseData && collapseData.transitioning) {

        transitioning = true;
        return false;
      }

      return true;
    });

    if (transitioning) return picker;

    if (component && component.hasClass('btn')) component.toggleClass('active');

    widget.hide();

    (0, _jquery2.default)(window).off('resize', place);
    widget.off('click', '[data-action]');
    widget.off('mousedown', false);

    widget.remove();
    widget = false;

    notifyEvent({
      type: 'dp.hide',
      date: _date.clone()
    });

    input.blur();

    return picker;
  }

  function _clear() {
    setValue(null);
  }

  /********************************************************************************
   *
   * Widget UI interaction functions
   *
   ********************************************************************************/
  var actions = {
    next: function next() {

      var navFnc = datePickerModes[currentViewMode].navFnc;

      _viewDate.add(datePickerModes[currentViewMode].navStep, navFnc);
      fillDate();
      viewUpdate(navFnc);
    },
    previous: function previous() {

      var navFnc = datePickerModes[currentViewMode].navFnc;

      _viewDate.subtract(datePickerModes[currentViewMode].navStep, navFnc);
      fillDate();
      viewUpdate(navFnc);
    },
    pickerSwitch: function pickerSwitch() {
      showMode(1);
    },
    selectMonth: function selectMonth(e) {

      var month = (0, _jquery2.default)(e.target).closest('tbody').find('span').index((0, _jquery2.default)(e.target));

      _viewDate.month(month);

      if (currentViewMode === minViewModeNumber) {
        setValue(_date.clone().year(_viewDate.year()).month(_viewDate.month()));
        if (!_options.inline) {
          hide();
        }
      } else {
        showMode(-1);
        fillDate();
      }
      viewUpdate('M');
    },
    selectYear: function selectYear(e) {

      var year = parseInt((0, _jquery2.default)(e.target).text(), 10) || 0;

      _viewDate.year(year);
      if (currentViewMode === minViewModeNumber) {
        setValue(_date.clone().year(_viewDate.year()));
        if (!_options.inline) {
          hide();
        }
      } else {
        showMode(-1);
        fillDate();
      }
      viewUpdate('YYYY');
    },
    selectDecade: function selectDecade(e) {

      var year = parseInt((0, _jquery2.default)(e.target).data('selection'), 10) || 0;

      _viewDate.year(year);
      if (currentViewMode === minViewModeNumber) {
        setValue(_date.clone().year(_viewDate.year()));
        if (!_options.inline) {
          hide();
        }
      } else {
        showMode(-1);
        fillDate();
      }
      viewUpdate('YYYY');
    },
    selectDay: function selectDay(e) {

      var day = _viewDate.clone();

      if ((0, _jquery2.default)(e.target).is('.old')) day.subtract(1, 'M');

      if ((0, _jquery2.default)(e.target).is('.new')) day.add(1, 'M');

      setValue(day.date(parseInt((0, _jquery2.default)(e.target).text(), 10)));

      if (!hasTime() && !_options.keepOpen && !_options.inline) hide();
    },
    incrementHours: function incrementHours() {

      var newDate = _date.clone().add(1, 'h');

      if (isValid(newDate, 'h')) setValue(newDate);
    },
    incrementMinutes: function incrementMinutes() {

      var newDate = _date.clone().add(_options.stepping, 'm');

      if (isValid(newDate, 'm')) setValue(newDate);
    },
    incrementSeconds: function incrementSeconds() {

      var newDate = _date.clone().add(1, 's');

      if (isValid(newDate, 's')) setValue(newDate);
    },
    decrementHours: function decrementHours() {

      var newDate = _date.clone().subtract(1, 'h');

      if (isValid(newDate, 'h')) setValue(newDate);
    },
    decrementMinutes: function decrementMinutes() {

      var newDate = _date.clone().subtract(_options.stepping, 'm');

      if (isValid(newDate, 'm')) setValue(newDate);
    },
    decrementSeconds: function decrementSeconds() {

      var newDate = _date.clone().subtract(1, 's');

      if (isValid(newDate, 's')) setValue(newDate);
    },
    togglePeriod: function togglePeriod() {

      setValue(_date.clone().add(_date.hours() >= 12 ? -12 : 12, 'h'));
    },
    togglePicker: function togglePicker(e) {
      var $this = (0, _jquery2.default)(e.target),
          $parent = $this.closest('ul'),
          expanded = $parent.find('.in'),
          closed = $parent.find('.collapse:not(.in)');

      if (expanded && expanded.length) {

        var collapseData = expanded.data('collapse');

        if (collapseData && collapseData.transitioning) return;

        if (expanded.collapse) {
          // if collapse plugin is available through bootstrap.js then use it
          expanded.collapse('hide');
          closed.collapse('show');
        } else {
          // otherwise just toggle in class on the two views
          expanded.removeClass('in');
          closed.addClass('in');
        }
        if ($this.is('span')) {
          $this.toggleClass(_options.icons.time + ' ' + _options.icons.date);
        } else {
          $this.find('span').toggleClass(_options.icons.time + ' ' + _options.icons.date);
        }

        // NOTE: uncomment if toggled state will be restored in show()
        //if (component) {
        //    component.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
        //}
      }
    },
    showPicker: function showPicker() {
      widget.find('.timepicker > div:not(.timepicker-picker)').hide();
      widget.find('.timepicker .timepicker-picker').show();
    },
    showHours: function showHours() {
      widget.find('.timepicker .timepicker-picker').hide();
      widget.find('.timepicker .timepicker-hours').show();
    },
    showMinutes: function showMinutes() {
      widget.find('.timepicker .timepicker-picker').hide();
      widget.find('.timepicker .timepicker-minutes').show();
    },
    showSeconds: function showSeconds() {
      widget.find('.timepicker .timepicker-picker').hide();
      widget.find('.timepicker .timepicker-seconds').show();
    },
    selectHour: function selectHour(e) {
      var hour = parseInt((0, _jquery2.default)(e.target).text(), 10);

      if (!use24Hours) {
        if (_date.hours() >= 12) {
          if (hour !== 12) {
            hour += 12;
          }
        } else {
          if (hour === 12) {
            hour = 0;
          }
        }
      }
      setValue(_date.clone().hours(hour));
      actions.showPicker.call(picker);
    },
    selectMinute: function selectMinute(e) {
      setValue(_date.clone().minutes(parseInt((0, _jquery2.default)(e.target).text(), 10)));
      actions.showPicker.call(picker);
    },
    selectSecond: function selectSecond(e) {
      setValue(_date.clone().seconds(parseInt((0, _jquery2.default)(e.target).text(), 10)));
      actions.showPicker.call(picker);
    },


    clear: _clear,

    today: function today() {
      if (isValid((0, _moment2.default)(), 'd')) {
        setValue((0, _moment2.default)());
      }
    },


    close: hide
  };

  function parseInputDate(inputDate) {

    if (_options.parseInputDate === undefined) {

      if (_moment2.default.isMoment(inputDate) || inputDate instanceof Date) {
        inputDate = (0, _moment2.default)(inputDate);
      } else {
        inputDate = (0, _moment2.default)(inputDate, parseFormats, _options.useStrict);
      }
    } else {
      inputDate = _options.parseInputDate(inputDate);
    }

    inputDate.locale(_options.locale);

    return inputDate;
  }

  function doAction(e) {

    if ((0, _jquery2.default)(e.currentTarget).is('.disabled')) return false;

    actions[(0, _jquery2.default)(e.currentTarget).data('action')].apply(picker, arguments);

    return false;
  }

  function show() {
    ///<summary>Shows the widget. Possibly will emit dp.show and dp.change</summary>
    var currentMoment = void 0;

    var useCurrentGranularity = {
      year: function year(m) {
        return m.month(0).date(1).hours(0).seconds(0).minutes(0);
      },
      month: function month(m) {
        return m.date(1).hours(0).seconds(0).minutes(0);
      },
      day: function day(m) {
        return m.hours(0).seconds(0).minutes(0);
      },
      hour: function hour(m) {
        return m.seconds(0).minutes(0);
      },
      minute: function minute(m) {
        return m.seconds(0);
      }
    };

    if (input.prop('disabled') || !_options.ignoreReadonly && input.prop('readonly') || widget) {
      return picker;
    }
    if (input.val() !== undefined && input.val().trim().length !== 0) {

      setValue(parseInputDate(input.val().trim()));
    } else if (_options.useCurrent && unset && (input.is('input') && input.val().trim().length === 0 || _options.inline)) {

      currentMoment = (0, _moment2.default)();

      if (typeof _options.useCurrent === 'string') {

        currentMoment = useCurrentGranularity[_options.useCurrent](currentMoment);
      }

      setValue(currentMoment);
    }

    widget = getTemplate();

    fillDow();
    fillMonths();

    widget.find('.timepicker-hours').hide();
    widget.find('.timepicker-minutes').hide();
    widget.find('.timepicker-seconds').hide();

    update();
    showMode();

    (0, _jquery2.default)(window).on('resize', place);
    widget.on('click', '[data-action]', doAction); // this handles clicks on the widget
    widget.on('mousedown', false);

    if (component && component.hasClass('btn')) {
      component.toggleClass('active');
    }
    widget.show();
    place();

    if (_options.focusOnShow && !input.is(':focus')) {
      input.focus();
    }

    notifyEvent({
      type: 'dp.show'
    });
    return picker;
  }

  function toggle() {
    /// <summary>Shows or hides the widget</summary>
    return widget ? hide() : show();
  }

  function keydown(e) {

    var pressedKeys = [],
        pressedModifiers = {},
        currentKey = e.which,
        pressed = "p";

    var handler = null;

    keyState[currentKey] = pressed;

    for (var index in keyState) {

      if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {

        pressedKeys.push(index);

        if (parseInt(index, 10) !== currentKey) {

          pressedModifiers[index] = true;
        }
      }
    }

    for (var _index in _options.keyBinds) {

      if (_options.keyBinds.hasOwnProperty(_index) && typeof _options.keyBinds[_index] === 'function') {

        var keyBindKeys = _index.split(' ');

        if (keyBindKeys.length === pressedKeys.length && keyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {

          var allModifiersPressed = true;

          for (var index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {

            if (!(keyMap[keyBindKeys[index2]] in pressedModifiers)) {

              allModifiersPressed = false;
              break;
            }
          }
          if (allModifiersPressed) {
            handler = _options.keyBinds[_index];
            break;
          }
        }
      }
    }

    if (handler) {
      handler.call(picker, widget);
      e.stopPropagation();
      e.preventDefault();
    }
  }

  function keyup(e) {

    keyState[e.which] = 'r';
    e.stopPropagation();
    e.preventDefault();
  }

  function change(e) {

    var val = (0, _jquery2.default)(e.target).val().trim(),
        parsedDate = val ? parseInputDate(val) : null;

    setValue(parsedDate);
    e.stopImmediatePropagation();
    return false;
  }

  function attachDatePickerElementEvents() {

    input.on({
      change: change,
      keydown: keydown,
      keyup: keyup,
      'blur': _options.debug ? '' : hide,
      'focus': _options.allowInputToggle ? show : ''
    });

    if (element.is('input')) {
      input.on({
        'focus': show
      });
    } else if (component) {
      component.on('click', toggle);
      component.on('mousedown', false);
    }
  }

  function detachDatePickerElementEvents() {

    input.off({
      change: change,
      blur: blur,
      keydown: keydown,
      keyup: keyup,
      'focus': _options.allowInputToggle ? hide : ''
    });

    if (element.is('input')) {

      input.off({
        'focus': show
      });
    } else if (component) {

      component.off('click', toggle);
      component.off('mousedown', false);
    }
  }

  function indexGivenDates(givenDatesArray) {
    // Store given enabledDates and disabledDates as keys.
    // This way we can check their existence in O(1) time instead of looping through whole array.
    // (for example: options.enabledDates['2014-02-27'] === true)
    var givenDatesIndexed = {};

    _jquery2.default.each(givenDatesArray, function indexDates() {

      var dDate = parseInputDate(this);

      if (dDate.isValid()) givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
    });

    return Object.keys(givenDatesIndexed).length ? givenDatesIndexed : false;
  }

  function indexGivenHours(givenHoursArray) {
    // Store given enabledHours and disabledHours as keys.
    // This way we can check their existence in O(1) time instead of looping through whole array.
    // (for example: options.enabledHours['2014-02-27'] === true)
    var givenHoursIndexed = {};

    _jquery2.default.each(givenHoursArray, function setToTrue() {
      givenHoursIndexed[this] = true;
    });

    return Object.keys(givenHoursIndexed).length ? givenHoursIndexed : false;
  }

  function initFormatting() {

    var format = _options.format || 'L LT';

    actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {

      var newinput = _date.localeData().longDateFormat(formatInput) || formatInput;

      return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput2) {
        //temp fix for #740
        return _date.localeData().longDateFormat(formatInput2) || formatInput2;
      });
    });

    parseFormats = _options.extraFormats ? _options.extraFormats.slice() : [];

    if (parseFormats.indexOf(format) < 0 && parseFormats.indexOf(actualFormat) < 0) {
      parseFormats.push(actualFormat);
    }

    use24Hours = actualFormat.toLowerCase().indexOf('a') < 1 && actualFormat.replace(/\[.*?\]/g, '').indexOf('h') < 1;

    if (isEnabled('y')) minViewModeNumber = 2;

    if (isEnabled('M')) minViewModeNumber = 1;

    if (isEnabled('d')) minViewModeNumber = 0;

    currentViewMode = Math.max(minViewModeNumber, currentViewMode);

    if (!unset) setValue(_date);
  }

  ////////////////////////////////////////////////////////////////////////////////////
  // Public API functions
  // =====================
  //
  // Important: Do not expose direct references to private objects or the options
  // object to the outer world. Always return a clone when returning values or make
  // a clone when setting a private variable.
  //
  /////////////////////////////////////////////////////////////////////////////////////

  Object.assign(picker, {
    destroy: function destroy() {
      ///<summary>Destroys the widget and removes all attached event listeners</summary>
      hide();
      detachDatePickerElementEvents();
      element.removeData('DateTimePicker');
      element.removeData('date');
    },


    toggle: toggle,

    show: show,

    hide: hide,

    disable: function disable() {
      ///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
      ///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>
      hide();
      if (component && component.hasClass('btn')) {
        component.addClass('disabled');
      }
      input.prop('disabled', true);
      return picker;
    },
    enable: function enable() {
      ///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
      if (component && component.hasClass('btn')) {
        component.removeClass('disabled');
      }
      input.prop('disabled', false);
      return picker;
    },
    ignoreReadonly: function ignoreReadonly(_ignoreReadonly) {
      if (arguments.length === 0) {
        return _options.ignoreReadonly;
      }
      if (typeof _ignoreReadonly !== 'boolean') {
        throw new TypeError('ignoreReadonly () expects a boolean parameter');
      }
      _options.ignoreReadonly = _ignoreReadonly;
      return picker;
    },
    options: function options(newOptions) {

      if (arguments.length === 0) return _jquery2.default.extend(true, {}, _options);

      if (!(newOptions instanceof Object)) {
        throw new TypeError('options() options parameter should be an object');
      }

      _jquery2.default.extend(true, _options, newOptions);

      _jquery2.default.each(_options, function (key, value) {

        if (picker[key] !== undefined) picker[key](value);else throw new TypeError('option ' + key + ' is not recognized!');
      });

      return picker;
    },
    date: function date(newDate) {
      ///<signature helpKeyword="$.fn.datetimepicker.date">
      ///<summary>Returns the component's model current date, a moment object or null if not set.</summary>
      ///<returns type="Moment">date.clone()</returns>
      ///</signature>
      ///<signature>
      ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
      ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
      ///</signature>
      if (arguments.length === 0) {
        if (unset) {
          return null;
        }
        return _date.clone();
      }

      if (newDate !== null && typeof newDate !== 'string' && !_moment2.default.isMoment(newDate) && !(newDate instanceof Date)) {
        throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
      }

      setValue(newDate === null ? null : parseInputDate(newDate));
      return picker;
    },
    format: function format(newFormat) {
      ///<summary>test su</summary>
      ///<param name="newFormat">info about para</param>
      ///<returns type="string|boolean">returns foo</returns>
      if (arguments.length === 0) {
        return _options.format;
      }

      if (typeof newFormat !== 'string' && (typeof newFormat !== 'boolean' || newFormat !== false)) {
        throw new TypeError('format() expects a sting or boolean:false parameter ' + newFormat);
      }

      _options.format = newFormat;
      if (actualFormat) {
        initFormatting(); // reinit formatting
      }
      return picker;
    },
    dayViewHeaderFormat: function dayViewHeaderFormat(newFormat) {
      if (arguments.length === 0) {
        return _options.dayViewHeaderFormat;
      }

      if (typeof newFormat !== 'string') {
        throw new TypeError('dayViewHeaderFormat() expects a string parameter');
      }

      _options.dayViewHeaderFormat = newFormat;
      return picker;
    },
    extraFormats: function extraFormats(formats) {
      if (arguments.length === 0) {
        return _options.extraFormats;
      }

      if (formats !== false && !(formats instanceof Array)) {
        throw new TypeError('extraFormats() expects an array or false parameter');
      }

      _options.extraFormats = formats;
      if (parseFormats) {
        initFormatting(); // reinit formatting
      }
      return picker;
    },
    disabledDates: function disabledDates(dates) {
      ///<signature helpKeyword="$.fn.datetimepicker.disabledDates">
      ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
      ///<returns type="array">options.disabledDates</returns>
      ///</signature>
      ///<signature>
      ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
      ///options.enabledDates if such exist.</summary>
      ///<param name="dates" locid="$.fn.datetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
      ///</signature>
      if (arguments.length === 0) {
        return _options.disabledDates ? _jquery2.default.extend({}, _options.disabledDates) : _options.disabledDates;
      }

      if (!dates) {
        _options.disabledDates = false;
        update();
        return picker;
      }
      if (!(dates instanceof Array)) {
        throw new TypeError('disabledDates() expects an array parameter');
      }
      _options.disabledDates = indexGivenDates(dates);
      _options.enabledDates = false;
      update();
      return picker;
    },
    enabledDates: function enabledDates(dates) {
      ///<signature helpKeyword="$.fn.datetimepicker.enabledDates">
      ///<summary>Returns an array with the currently set enabled dates on the component.</summary>
      ///<returns type="array">options.enabledDates</returns>
      ///</signature>
      ///<signature>
      ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledDates if such exist.</summary>
      ///<param name="dates" locid="$.fn.datetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
      ///</signature>
      if (arguments.length === 0) {
        return _options.enabledDates ? _jquery2.default.extend({}, _options.enabledDates) : _options.enabledDates;
      }

      if (!dates) {
        _options.enabledDates = false;
        update();
        return picker;
      }
      if (!(dates instanceof Array)) {
        throw new TypeError('enabledDates() expects an array parameter');
      }
      _options.enabledDates = indexGivenDates(dates);
      _options.disabledDates = false;
      update();
      return picker;
    },
    daysOfWeekDisabled: function daysOfWeekDisabled(_daysOfWeekDisabled) {

      var tries = void 0;

      if (arguments.length === 0) {
        return _options.daysOfWeekDisabled.splice(0);
      }

      if (typeof _daysOfWeekDisabled === 'boolean' && !_daysOfWeekDisabled) {
        _options.daysOfWeekDisabled = false;
        update();
        return picker;
      }

      if (!(_daysOfWeekDisabled instanceof Array)) {
        throw new TypeError('daysOfWeekDisabled() expects an array parameter');
      }
      _options.daysOfWeekDisabled = _daysOfWeekDisabled.reduce(function (previousValue, currentValue) {
        currentValue = parseInt(currentValue, 10);
        if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
          return previousValue;
        }
        if (previousValue.indexOf(currentValue) === -1) {
          previousValue.push(currentValue);
        }
        return previousValue;
      }, []).sort();
      if (_options.useCurrent && !_options.keepInvalid) {
        tries = 0;
        while (!isValid(_date, 'd')) {
          _date.add(1, 'd');
          if (tries === 7) {
            throw new Error('Tried 7 times to find a valid date');
          }
          tries++;
        }
        setValue(_date);
      }
      update();
      return picker;
    },
    maxDate: function maxDate(_maxDate) {

      if (arguments.length === 0) {
        return _options.maxDate ? _options.maxDate.clone() : _options.maxDate;
      }

      if (typeof _maxDate === 'boolean' && _maxDate === false) {
        _options.maxDate = false;
        update();
        return picker;
      }

      if (typeof _maxDate === 'string') {
        if (_maxDate === 'now' || _maxDate === 'moment') {
          _maxDate = (0, _moment2.default)();
        }
      }

      var parsedDate = parseInputDate(_maxDate);

      if (!parsedDate.isValid()) {
        throw new TypeError('maxDate() Could not parse date parameter: ' + _maxDate);
      }
      if (_options.minDate && parsedDate.isBefore(_options.minDate)) {
        throw new TypeError('maxDate() date parameter is before options.minDate: ' + parsedDate.format(actualFormat));
      }
      _options.maxDate = parsedDate;
      if (_options.useCurrent && !_options.keepInvalid && _date.isAfter(_maxDate)) {
        setValue(_options.maxDate);
      }
      if (_viewDate.isAfter(parsedDate)) {
        _viewDate = parsedDate.clone().subtract(_options.stepping, 'm');
      }
      update();
      return picker;
    },
    minDate: function minDate(_minDate) {

      if (arguments.length === 0) {
        return _options.minDate ? _options.minDate.clone() : _options.minDate;
      }

      if (typeof _minDate === 'boolean' && _minDate === false) {
        _options.minDate = false;
        update();
        return picker;
      }

      if (typeof _minDate === 'string') {
        if (_minDate === 'now' || _minDate === 'moment') {
          _minDate = (0, _moment2.default)();
        }
      }

      var parsedDate = parseInputDate(_minDate);

      if (!parsedDate.isValid()) {
        throw new TypeError('minDate() Could not parse date parameter: ' + _minDate);
      }
      if (_options.maxDate && parsedDate.isAfter(_options.maxDate)) {
        throw new TypeError('minDate() date parameter is after options.maxDate: ' + parsedDate.format(actualFormat));
      }
      _options.minDate = parsedDate;
      if (_options.useCurrent && !_options.keepInvalid && _date.isBefore(_minDate)) {
        setValue(_options.minDate);
      }
      if (_viewDate.isBefore(parsedDate)) {
        _viewDate = parsedDate.clone().add(_options.stepping, 'm');
      }
      update();
      return picker;
    },
    defaultDate: function defaultDate(_defaultDate) {

      ///<signature helpKeyword="$.fn.datetimepicker.defaultDate">
      ///<summary>Returns a moment with the options.defaultDate option configuration or false if not set</summary>
      ///<returns type="Moment">date.clone()</returns>
      ///</signature>
      ///<signature>
      ///<summary>Will set the picker's inital date. If a boolean:false value is passed the options.defaultDate parameter is cleared.</summary>
      ///<param name="defaultDate" locid="$.fn.datetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
      ///</signature>
      if (arguments.length === 0) {
        return _options.defaultDate ? _options.defaultDate.clone() : _options.defaultDate;
      }
      if (!_defaultDate) {
        _options.defaultDate = false;
        return picker;
      }

      if (typeof _defaultDate === 'string') {
        if (_defaultDate === 'now' || _defaultDate === 'moment') {
          _defaultDate = (0, _moment2.default)();
        }
      }

      var parsedDate = parseInputDate(_defaultDate);

      if (!parsedDate.isValid()) {
        throw new TypeError('defaultDate() Could not parse date parameter: ' + _defaultDate);
      }
      if (!isValid(parsedDate)) {
        throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
      }

      _options.defaultDate = parsedDate;

      if (_options.defaultDate && _options.inline || input.val().trim() === '' && input.attr('placeholder') === undefined) {
        setValue(_options.defaultDate);
      }
      return picker;
    },
    locale: function locale(_locale) {

      if (arguments.length === 0) {
        return _options.locale;
      }

      if (!_moment2.default.localeData(_locale)) {
        throw new TypeError('locale() locale ' + _locale + ' is not loaded from moment locales!');
      }

      _options.locale = _locale;
      _date.locale(_options.locale);
      _viewDate.locale(_options.locale);

      if (actualFormat) {
        initFormatting(); // reinit formatting
      }
      if (widget) {
        hide();
        show();
      }
      return picker;
    },
    stepping: function stepping(_stepping) {
      if (arguments.length === 0) {
        return _options.stepping;
      }

      _stepping = parseInt(_stepping, 10);
      if (isNaN(_stepping) || _stepping < 1) {
        _stepping = 1;
      }
      _options.stepping = _stepping;
      return picker;
    },
    useCurrent: function useCurrent(_useCurrent) {

      var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];

      if (arguments.length === 0) {
        return _options.useCurrent;
      }

      if (typeof _useCurrent !== 'boolean' && typeof _useCurrent !== 'string') {
        throw new TypeError('useCurrent() expects a boolean or string parameter');
      }
      if (typeof _useCurrent === 'string' && useCurrentOptions.indexOf(_useCurrent.toLowerCase()) === -1) {
        throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
      }
      _options.useCurrent = _useCurrent;
      return picker;
    },
    collapse: function collapse(_collapse) {
      if (arguments.length === 0) {
        return _options.collapse;
      }

      if (typeof _collapse !== 'boolean') {
        throw new TypeError('collapse() expects a boolean parameter');
      }
      if (_options.collapse === _collapse) {
        return picker;
      }
      _options.collapse = _collapse;
      if (widget) {
        hide();
        show();
      }
      return picker;
    },
    icons: function icons(_icons) {
      if (arguments.length === 0) {
        return _jquery2.default.extend({}, _options.icons);
      }

      if (!(_icons instanceof Object)) {
        throw new TypeError('icons() expects parameter to be an Object');
      }
      _jquery2.default.extend(_options.icons, _icons);
      if (widget) {
        hide();
        show();
      }
      return picker;
    },
    tooltips: function tooltips(_tooltips) {
      if (arguments.length === 0) {
        return _jquery2.default.extend({}, _options.tooltips);
      }

      if (!(_tooltips instanceof Object)) {
        throw new TypeError('tooltips() expects parameter to be an Object');
      }
      _jquery2.default.extend(_options.tooltips, _tooltips);
      if (widget) {
        hide();
        show();
      }
      return picker;
    },
    useStrict: function useStrict(_useStrict) {
      if (arguments.length === 0) {
        return _options.useStrict;
      }

      if (typeof _useStrict !== 'boolean') {
        throw new TypeError('useStrict() expects a boolean parameter');
      }
      _options.useStrict = _useStrict;
      return picker;
    },
    sideBySide: function sideBySide(_sideBySide) {
      if (arguments.length === 0) {
        return _options.sideBySide;
      }

      if (typeof _sideBySide !== 'boolean') {
        throw new TypeError('sideBySide() expects a boolean parameter');
      }
      _options.sideBySide = _sideBySide;
      if (widget) {
        hide();
        show();
      }
      return picker;
    },
    viewMode: function viewMode(_viewMode) {
      if (arguments.length === 0) {
        return _options.viewMode;
      }

      if (typeof _viewMode !== 'string') {
        throw new TypeError('viewMode() expects a string parameter');
      }

      if (viewModes.indexOf(_viewMode) === -1) {
        throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');
      }

      _options.viewMode = _viewMode;
      currentViewMode = Math.max(viewModes.indexOf(_viewMode), minViewModeNumber);

      showMode();
      return picker;
    },
    toolbarPlacement: function toolbarPlacement(_toolbarPlacement) {
      if (arguments.length === 0) {
        return _options.toolbarPlacement;
      }

      if (typeof _toolbarPlacement !== 'string') {
        throw new TypeError('toolbarPlacement() expects a string parameter');
      }
      if (toolbarPlacements.indexOf(_toolbarPlacement) === -1) {
        throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
      }
      _options.toolbarPlacement = _toolbarPlacement;

      if (widget) {
        hide();
        show();
      }
      return picker;
    },
    widgetPositioning: function widgetPositioning(_widgetPositioning) {
      if (arguments.length === 0) {
        return _jquery2.default.extend({}, _options.widgetPositioning);
      }

      if ({}.toString.call(_widgetPositioning) !== '[object Object]') {
        throw new TypeError('widgetPositioning() expects an object variable');
      }
      if (_widgetPositioning.horizontal) {
        if (typeof _widgetPositioning.horizontal !== 'string') {
          throw new TypeError('widgetPositioning() horizontal variable must be a string');
        }
        _widgetPositioning.horizontal = _widgetPositioning.horizontal.toLowerCase();
        if (horizontalModes.indexOf(_widgetPositioning.horizontal) === -1) {
          throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
        }
        _options.widgetPositioning.horizontal = _widgetPositioning.horizontal;
      }
      if (_widgetPositioning.vertical) {
        if (typeof _widgetPositioning.vertical !== 'string') {
          throw new TypeError('widgetPositioning() vertical variable must be a string');
        }
        _widgetPositioning.vertical = _widgetPositioning.vertical.toLowerCase();
        if (verticalModes.indexOf(_widgetPositioning.vertical) === -1) {
          throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
        }
        _options.widgetPositioning.vertical = _widgetPositioning.vertical;
      }
      update();
      return picker;
    },
    calendarWeeks: function calendarWeeks(_calendarWeeks) {
      if (arguments.length === 0) {
        return _options.calendarWeeks;
      }

      if (typeof _calendarWeeks !== 'boolean') {
        throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
      }

      _options.calendarWeeks = _calendarWeeks;
      update();
      return picker;
    },
    showTodayButton: function showTodayButton(_showTodayButton) {
      if (arguments.length === 0) {
        return _options.showTodayButton;
      }

      if (typeof _showTodayButton !== 'boolean') {
        throw new TypeError('showTodayButton() expects a boolean parameter');
      }

      _options.showTodayButton = _showTodayButton;
      if (widget) {
        hide();
        show();
      }
      return picker;
    },
    showClear: function showClear(_showClear) {
      if (arguments.length === 0) {
        return _options.showClear;
      }

      if (typeof _showClear !== 'boolean') {
        throw new TypeError('showClear() expects a boolean parameter');
      }

      _options.showClear = _showClear;
      if (widget) {
        hide();
        show();
      }
      return picker;
    },
    widgetParent: function widgetParent(_widgetParent) {
      if (arguments.length === 0) {
        return _options.widgetParent;
      }

      if (typeof _widgetParent === 'string') {
        _widgetParent = (0, _jquery2.default)(_widgetParent);
      }

      if (_widgetParent !== null && typeof _widgetParent !== 'string' && !(_widgetParent instanceof _jquery2.default)) {
        throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
      }

      _options.widgetParent = _widgetParent;
      if (widget) {
        hide();
        show();
      }
      return picker;
    },
    keepOpen: function keepOpen(_keepOpen) {
      if (arguments.length === 0) {
        return _options.keepOpen;
      }

      if (typeof _keepOpen !== 'boolean') {
        throw new TypeError('keepOpen() expects a boolean parameter');
      }

      _options.keepOpen = _keepOpen;
      return picker;
    },
    focusOnShow: function focusOnShow(_focusOnShow) {
      if (arguments.length === 0) {
        return _options.focusOnShow;
      }

      if (typeof _focusOnShow !== 'boolean') {
        throw new TypeError('focusOnShow() expects a boolean parameter');
      }

      _options.focusOnShow = _focusOnShow;
      return picker;
    },
    inline: function inline(_inline) {
      if (arguments.length === 0) {
        return _options.inline;
      }

      if (typeof _inline !== 'boolean') {
        throw new TypeError('inline() expects a boolean parameter');
      }

      _options.inline = _inline;
      return picker;
    },
    clear: function clear() {
      _clear();
      return picker;
    },
    keyBinds: function keyBinds(_keyBinds) {
      _options.keyBinds = _keyBinds;
      return picker;
    },
    debug: function debug(_debug) {
      if (typeof _debug !== 'boolean') {
        throw new TypeError('debug() expects a boolean parameter');
      }

      _options.debug = _debug;
      return picker;
    },
    allowInputToggle: function allowInputToggle(_allowInputToggle) {
      if (arguments.length === 0) {
        return _options.allowInputToggle;
      }

      if (typeof _allowInputToggle !== 'boolean') {
        throw new TypeError('allowInputToggle() expects a boolean parameter');
      }

      _options.allowInputToggle = _allowInputToggle;
      return picker;
    },
    showClose: function showClose(_showClose) {
      if (arguments.length === 0) {
        return _options.showClose;
      }

      if (typeof _showClose !== 'boolean') {
        throw new TypeError('showClose() expects a boolean parameter');
      }

      _options.showClose = _showClose;
      return picker;
    },
    keepInvalid: function keepInvalid(_keepInvalid) {
      if (arguments.length === 0) {
        return _options.keepInvalid;
      }

      if (typeof _keepInvalid !== 'boolean') {
        throw new TypeError('keepInvalid() expects a boolean parameter');
      }
      _options.keepInvalid = _keepInvalid;
      return picker;
    },
    datepickerInput: function datepickerInput(_datepickerInput) {
      if (arguments.length === 0) {
        return _options.datepickerInput;
      }

      if (typeof _datepickerInput !== 'string') {
        throw new TypeError('datepickerInput() expects a string parameter');
      }

      _options.datepickerInput = _datepickerInput;
      return picker;
    },
    parseInputDate: function parseInputDate(_parseInputDate) {

      if (arguments.length === 0) return _options.parseInputDate;

      if (typeof _parseInputDate !== 'function') {
        throw new TypeError('parseInputDate() should be as function');
      }

      _options.parseInputDate = _parseInputDate;

      return picker;
    },
    disabledTimeIntervals: function disabledTimeIntervals(_disabledTimeIntervals) {
      ///<signature helpKeyword="$.fn.datetimepicker.disabledTimeIntervals">
      ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
      ///<returns type="array">options.disabledTimeIntervals</returns>
      ///</signature>
      ///<signature>
      ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
      ///options.enabledDates if such exist.</summary>
      ///<param name="dates" locid="$.fn.datetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
      ///</signature>
      if (arguments.length === 0) {
        return _options.disabledTimeIntervals ? _jquery2.default.extend({}, _options.disabledTimeIntervals) : _options.disabledTimeIntervals;
      }

      if (!_disabledTimeIntervals) {
        _options.disabledTimeIntervals = false;
        update();
        return picker;
      }
      if (!(_disabledTimeIntervals instanceof Array)) {
        throw new TypeError('disabledTimeIntervals() expects an array parameter');
      }
      _options.disabledTimeIntervals = _disabledTimeIntervals;
      update();
      return picker;
    },
    disabledHours: function disabledHours(hours) {

      var tries = void 0;

      ///<signature helpKeyword="$.fn.datetimepicker.disabledHours">
      ///<summary>Returns an array with the currently set disabled hours on the component.</summary>
      ///<returns type="array">options.disabledHours</returns>
      ///</signature>
      ///<signature>
      ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
      ///options.enabledHours if such exist.</summary>
      ///<param name="hours" locid="$.fn.datetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
      ///</signature>
      if (arguments.length === 0) {
        return _options.disabledHours ? _jquery2.default.extend({}, _options.disabledHours) : _options.disabledHours;
      }

      if (!hours) {
        _options.disabledHours = false;
        update();
        return picker;
      }
      if (!(hours instanceof Array)) {
        throw new TypeError('disabledHours() expects an array parameter');
      }
      _options.disabledHours = indexGivenHours(hours);
      _options.enabledHours = false;
      if (_options.useCurrent && !_options.keepInvalid) {
        tries = 0;
        while (!isValid(_date, 'h')) {
          _date.add(1, 'h');
          if (tries === 24) {
            throw new Error('Tried 24 times to find a valid date');
          }
          tries++;
        }
        setValue(_date);
      }
      update();
      return picker;
    },
    enabledHours: function enabledHours(hours) {

      var tries = void 0;

      ///<signature helpKeyword="$.fn.datetimepicker.enabledHours">
      ///<summary>Returns an array with the currently set enabled hours on the component.</summary>
      ///<returns type="array">options.enabledHours</returns>
      ///</signature>
      ///<signature>
      ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledHours if such exist.</summary>
      ///<param name="hours" locid="$.fn.datetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
      ///</signature>
      if (arguments.length === 0) {
        return _options.enabledHours ? _jquery2.default.extend({}, _options.enabledHours) : _options.enabledHours;
      }

      if (!hours) {
        _options.enabledHours = false;
        update();
        return picker;
      }
      if (!(hours instanceof Array)) {
        throw new TypeError('enabledHours() expects an array parameter');
      }
      _options.enabledHours = indexGivenHours(hours);
      _options.disabledHours = false;
      if (_options.useCurrent && !_options.keepInvalid) {
        tries = 0;
        while (!isValid(_date, 'h')) {
          _date.add(1, 'h');
          if (tries === 24) {
            throw new Error('Tried 24 times to find a valid date');
          }
          tries++;
        }
        setValue(_date);
      }
      update();
      return picker;
    },
    viewDate: function viewDate(newDate) {
      ///<signature helpKeyword="$.fn.datetimepicker.viewDate">
      ///<summary>Returns the component's model current viewDate, a moment object or null if not set.</summary>
      ///<returns type="Moment">viewDate.clone()</returns>
      ///</signature>
      ///<signature>
      ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
      ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, viewDate, moment, null parameter.</param>
      ///</signature>
      if (arguments.length === 0) {
        return _viewDate.clone();
      }

      if (!newDate) {
        _viewDate = _date.clone();
        return picker;
      }

      if (typeof newDate !== 'string' && !_moment2.default.isMoment(newDate) && !(newDate instanceof Date)) {
        throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
      }

      _viewDate = parseInputDate(newDate);
      viewUpdate();
      return picker;
    }
  });

  // initializing element and component attributes
  if (element.is('input')) {
    input = element;
  } else {
    input = element.find(_options.datepickerInput);
    if (input.size() === 0) {
      input = element.find('input');
    } else if (!input.is('input')) {
      throw new Error('CSS class "' + _options.datepickerInput + '" cannot be applied to non input element');
    }
  }

  if (element.hasClass('input-group')) {
    // in case there is more then one 'input-group-addon' Issue #48
    if (element.find('.datepickerbutton').size() === 0) {
      component = element.find('.input-group-addon');
    } else {
      component = element.find('.datepickerbutton');
    }
  }

  if (!_options.inline && !input.is('input')) {
    throw new Error('Could not initialize DateTimePicker without an input element');
  }

  _jquery2.default.extend(true, _options, dataToOptions());

  picker.options(_options);

  initFormatting();

  attachDatePickerElementEvents();

  if (input.prop('disabled')) picker.disable();

  if (input.is('input') && input.val().trim().length !== 0) {
    setValue(parseInputDate(input.val().trim()));
  } else if (_options.defaultDate && input.attr('placeholder') === undefined) {
    setValue(_options.defaultDate);
  }
  if (_options.inline) {
    show();
  }
  return picker;
}
exports.default = DateTimePicker;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DateTimePicker, "DateTimePicker", "src/components/DateTimePicker/bootstrap-datetimepicker.js");
}();

;