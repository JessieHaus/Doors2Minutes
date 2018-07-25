import React from 'react';
import ReactDOM from 'react-dom';
import theme from "@instructure/ui-themes/lib/canvas";
import Table from "@instructure/ui-elements/lib/components/Table";
import Heading from "@instructure/ui-elements/lib/components/Heading";
import Progress from "@instructure/ui-elements/lib/components/Progress";
import Text from "@instructure/ui-elements/lib/components/Text";
import Button from "@instructure/ui-buttons/lib/components/Button";

class App extends Component {
    render() {
      return (
        <div className="week1">
          <Heading>Week July 23rd - 27th</Heading>
          <Table>
            <thead>
              <tr>
                <th scope="col">Monday</th>
                <td>
                  Interior:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={40}
      valueMax={60}
    />
                </td>
                <td>
                  Steel Fiber:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={30}
      valueMax={60}
    />
                </td>
                <td>
                  Exterior:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={55}
      valueMax={60}
    />
                </td>
                <td>
                  Cut:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={60}
      valueMax={60}
    />
                </td>
                <td>
                  Commercial:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={4}
      valueMax={60}
    />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">Tuesday</th>
                <td>
                  Interior:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={2}
      valueMax={60}
    />
                </td>
                <td>
                  Steel Fiber:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={5}
      valueMax={60}
    />
                </td>
                <td>
                  Exterior:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={5}
      valueMax={60}
    />
                </td>
                <td>
                  Cut:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Commercial:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
              </tr>
              <tr>
                <th scope="col">Wednesday</th>
                <td>
                  Interior:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Steel Fiber:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Exterior:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Cut:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Commercial:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
              </tr>
              <tr>
                <th scope="col">Thursday</th>
                <td>
                  Interior:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Steel Fiber:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Exterior:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Cut:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Commercial:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
              </tr>
              <tr>
                <th scope="col">Friday</th>
                <td>
                  Interior:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Steel Fiber:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Exterior:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Cut:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
                <td>
                  Commercial:{" "}
                  <form onSubmit={this.addOrRemoveSet}>
                    <Button size="small" margin="0 x-small 0 0" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "remove")}>
                      - 
                    </Button>
                    
                    <Button size="small" variant="ghost" onClick={() => (this.addOrRemoveSetTest = "add")}>
                      + 
                    </Button>
                  </form>
                  <Progress
      label="Percent complete"
      formatValueText={function (valueNow, valueMax) {
        return valueNow + ' out of ' + valueMax
      }}
      formatDisplayedValue={function (valueNow, valueMax) {
        return (
          <span>
            <Text color="primary" size="medium" weight="bold">{valueNow}</Text>
            <br />
            <Text color="secondary" size="small">of </Text>
            <Text color="secondary" size="small">{valueMax}</Text>
          </span>
        )
      }}
      size="small"
      variant="circle-inverse"
      valueNow={50}
      valueMax={60}
    />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
  }
  
  export default App;