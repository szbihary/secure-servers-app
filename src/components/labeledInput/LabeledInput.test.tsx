import { screen, render, fireEvent } from '@testing-library/react';
import LabeledInput from './LabeledInput';

describe('LabeledInput component', () => {
  it('Should render an input component', () => {
    render(
      <LabeledInput id="id" label="label" onChange={() => {}} value="value" />
    );
  });

  it('Should have a label', () => {
    render(
      <LabeledInput id="id" label="label" onChange={() => {}} value="value" />
    );

    expect(screen.getByText('label')).toBeTruthy();
  });

  it('Should have a placeholder if set', () => {
    render(
      <LabeledInput
        id="id"
        label="label"
        placeholder="Some placeholder"
        onChange={() => {}}
        value="value"
      />
    );

    expect(screen.getByPlaceholderText('Some placeholder')).toBeTruthy();
  });

  it('Should have a value', () => {
    render(
      <LabeledInput id="id" label="label" onChange={() => {}} value="value" />
    );

    expect(screen.getByLabelText('label')).toHaveValue('value');
  });

  it('Should call onChange handler when the value is changed', async () => {
    const onChange = jest.fn();
    render(
      <LabeledInput
        id="id"
        label="label"
        onChange={onChange}
        value="Some value"
      />
    );
    const input = screen.getByLabelText('label');

    fireEvent.change(input, { target: { value: 'Hello' } });

    expect(onChange).toBeCalledWith('Hello');
  });
});
