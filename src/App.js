import Auth from './auth';
import Home from "./Home";
import React, { Component } from "react";
import "./App.css";
import theme from "@instructure/ui-themes/lib/canvas";
import Table from "@instructure/ui-elements/lib/components/Table";
import Heading from "@instructure/ui-elements/lib/components/Heading";
import Progress from "@instructure/ui-elements/lib/components/Progress";
import Text from "@instructure/ui-elements/lib/components/Text";
import Button from "@instructure/ui-buttons/lib/components/Button";

 

// class App extends Component {
//   render() {
//     return (
//       <Home/>
const auth = new Auth();
auth.login();   

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Monday
      valuenowmonint: 0,
      valuenowmonsf: 0,
      valuenowmone: 0,
      valuenowmonc: 0,
      //Tuesday
      valuenowtuesint: 0,
      valuenowtuessf: 0,
      valuenowtuese: 0,
      valuenowtuesc: 0,
      //Wednesday
      valuenowwedint: 0,
      valuenowwedsf: 0,
      valuenowwede: 0,
      valuenowwedc: 0,
      //Thursday
      valuenowthursint: 0,
      valuenowthurssf: 0,
      valuenowthurse: 0,
      valuenowthursc: 0,
      //Friday
      valuenowfriint: 0,
      valuenowfrisf: 0,
      valuenowfrie: 0,
      valuenowfric: 0,
      show: true
    };
  }
  //Monday
  IncrementItemMonInt = () => {
    if (this.state.valuenowmonint < 60)
      this.setState({ valuenowmonint: this.state.valuenowmonint + 1 });
    else {
    }
  };
  DecreaseItemMonInt = () => {
    if (this.state.valuenowmonint > 0)
      this.setState({ valuenowmonint: this.state.valuenowmonint - 1 });
    else {
    }
  };
  IncrementItemMonSF = () => {
    if (this.state.valuenowmonsf < 32)
      this.setState({ valuenowmonsf: this.state.valuenowmonsf + 1 });
    else {
    }
  };
  DecreaseItemMonSF = () => {
    if (this.state.valuenowmonsf > 0)
      this.setState({ valuenowmonsf: this.state.valuenowmonsf - 1 });
    else {
    }
  };
  IncrementItemMonE = () => {
    if (this.state.valuenowmone < 19)
      this.setState({ valuenowmone: this.state.valuenowmone + 1 });
    else {
    }
  };
  DecreaseItemMonE = () => {
    if (this.state.valuenowmone > 0)
      this.setState({ valuenowmone: this.state.valuenowmone - 1 });
    else {
    }
  };
  IncrementItemMonC = () => {
    if (this.state.valuenowmonc < 10)
      this.setState({ valuenowmonc: this.state.valuenowmonc + 1 });
    else {
    }
  };
  DecreaseItemMonC = () => {
    if (this.state.valuenowmonc > 0)
      this.setState({ valuenowmonc: this.state.valuenowmonc - 1 });
    else {
    }
    //Tuesday
  };
  IncrementItemTuesInt = () => {
    if (this.state.valuenowtuesint < 60)
      this.setState({ valuenowtuesint: this.state.valuenowtuesint + 1 });
    else {
    }
  };
  DecreaseItemTuesInt = () => {
    if (this.state.valuenowtuesint > 0)
      this.setState({ valuenowtuesint: this.state.valuenowtuesint - 1 });
    else {
    }
  };
  IncrementItemTuesSF = () => {
    if (this.state.valuenowtuessf < 32)
      this.setState({ valuenowtuessf: this.state.valuenowtuessf + 1 });
    else {
    }
  };
  DecreaseItemTuesSF = () => {
    if (this.state.valuenowtuessf > 0)
      this.setState({ valuenowtuessf: this.state.valuenowtuessf - 1 });
    else {
    }
  };
  IncrementItemTuesE = () => {
    if (this.state.valuenowtuese < 19)
      this.setState({ valuenowtuese: this.state.valuenowtuese + 1 });
    else {
    }
  };
  DecreaseItemTuesE = () => {
    if (this.state.valuenowtuese > 0)
      this.setState({ valuenowtuese: this.state.valuenowtuese - 1 });
    else {
    }
  };
  IncrementItemTuesC = () => {
    if (this.state.valuenowtuesc < 10)
      this.setState({ valuenowtuesc: this.state.valuenowtuesc + 1 });
    else {
    }
  };
  DecreaseItemTuesC = () => {
    if (this.state.valuenowtuesc > 0)
      this.setState({ valuenowtuesc: this.state.valuenowtuesc - 1 });
    else {
    }
  };
  //Wednesday
  IncrementItemWedInt = () => {
    if (this.state.valuenowwedint < 60)
      this.setState({ valuenowwedint: this.state.valuenowwedint + 1 });
    else {
    }
  };
  DecreaseItemWedInt = () => {
    if (this.state.valuenowwedint > 0)
      this.setState({ valuenowwedint: this.state.valuenowwedint - 1 });
    else {
    }
  };
  IncrementItemWedSF = () => {
    if (this.state.valuenowwedsf < 32)
      this.setState({ valuenowwedsf: this.state.valuenowwedsf + 1 });
    else {
    }
  };
  DecreaseItemWedSF = () => {
    if (this.state.valuenowwedsf > 0)
      this.setState({ valuenowwedsf: this.state.valuenowwedsf - 1 });
    else {
    }
  };
  IncrementItemWedE = () => {
    if (this.state.valuenowwede < 19)
      this.setState({ valuenowwede: this.state.valuenowwede + 1 });
    else {
    }
  };
  DecreaseItemWedE = () => {
    if (this.state.valuenowwede > 0)
      this.setState({ valuenowwede: this.state.valuenowwede - 1 });
    else {
    }
  };
  IncrementItemWedC = () => {
    if (this.state.valuenowwedc < 10)
      this.setState({ valuenowwedc: this.state.valuenowwedc + 1 });
    else {
    }
  };
  DecreaseItemWedC = () => {
    if (this.state.valuenowwedc > 0)
      this.setState({ valuenowwedc: this.state.valuenowwedc - 1 });
    else {
    }
    //Thursday
  };
  IncrementItemThursInt = () => {
    if (this.state.valuenowthursint < 60)
      this.setState({ valuenowthursint: this.state.valuenowthursint + 1 });
    else {
    }
  };
  DecreaseItemThursInt = () => {
    if (this.state.valuenowthursint > 0)
      this.setState({ valuenowthursint: this.state.valuenowthursint - 1 });
    else {
    }
  };
  IncrementItemThursSF = () => {
    if (this.state.valuenowthurssf < 32)
      this.setState({ valuenowthurssf: this.state.valuenowthurssf + 1 });
    else {
    }
  };
  DecreaseItemThursSF = () => {
    if (this.state.valuenowthurssf > 0)
      this.setState({ valuenowthurssf: this.state.valuenowthurssf - 1 });
    else {
    }
  };
  IncrementItemThursE = () => {
    if (this.state.valuenowthurse < 19)
      this.setState({ valuenowthurse: this.state.valuenowthurse + 1 });
    else {
    }
  };
  DecreaseItemThursE = () => {
    if (this.state.valuenowthurse > 0)
      this.setState({ valuenowthurse: this.state.valuenowthurse - 1 });
    else {
    }
  };
  IncrementItemThursC = () => {
    if (this.state.valuenowthursc < 10)
      this.setState({ valuenowthursc: this.state.valuenowthursc + 1 });
    else {
    }
  };
  DecreaseItemThursC = () => {
    if (this.state.valuenowthursc > 0)
      this.setState({ valuenowthursc: this.state.valuenowthursc - 1 });
    else {
    }
  };
  //Friday
  IncrementItemFriInt = () => {
    if (this.state.valuenowfriint < 60)
      this.setState({ valuenowfriint: this.state.valuenowfriint + 1 });
    else {
    }
  };
  DecreaseItemFriInt = () => {
    if (this.state.valuenowfriint > 0)
      this.setState({ valuenowfriint: this.state.valuenowfriint - 1 });
    else {
    }
  };
  IncrementItemFriSF = () => {
    if (this.state.valuenowfrisf < 32)
      this.setState({ valuenowfrisf: this.state.valuenowfrisf + 1 });
    else {
    }
  };
  DecreaseItemFriSF = () => {
    if (this.state.valuenowfrisf > 0)
      this.setState({ valuenowfrisf: this.state.valuenowfrisf - 1 });
    else {
    }
  };
  IncrementItemFriE = () => {
    if (this.state.valuenowfrie < 19)
      this.setState({ valuenowfrie: this.state.valuenowfrie + 1 });
    else {
    }
  };
  DecreaseItemFriE = () => {
    if (this.state.valuenowfrie > 0)
      this.setState({ valuenowfrie: this.state.valuenowfrie - 1 });
    else {
    }
  };
  IncrementItemFriC = () => {
    if (this.state.valuenowfric < 10)
      this.setState({ valuenowfric: this.state.valuenowfric + 1 });
    else {
    }
  };
  DecreaseItemFriC = () => {
    if (this.state.valuenowfric > 0)
      this.setState({ valuenowfric: this.state.valuenowfric - 1 });
    else {
    }
  };

  render() {
    return (
      
      <div className="week1">
        <Heading level="h1" margin="medium 0 0 small">
          Week July 23rd - 27th
        </Heading>
        <Table border="top" margin="medium 0 0 0" striped="rows" caption="">
          <tbody>
            <tr>
              <th scope="col">Monday</th>
              <td>
                Interior:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowmonint, valueMax) {
                    return valuenowmonint + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowmonint, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowmonint}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowmonint}
                  valueMax={60}
                />
                <form>
                  <Button
                    size="small"
                    margin="0 small 0 medium"
                    variant="circle-ghost"
                    onClick={this.IncrementItemMonInt}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemMonInt}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Steel Fiber:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowmonsf, valueMax) {
                    return valuenowmonsf + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowmonsf, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowmonsf}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowmonsf}
                  valueMax={32}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 large"
                    variant="circle-ghost"
                    onClick={this.IncrementItemMonSF}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemMonSF}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Exterior:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowmone, valueMax) {
                    return valuenowmone + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowmone, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowmone}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowmone}
                  valueMax={19}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 large"
                    variant="circle-ghost"
                    onClick={this.IncrementItemMonE}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemMonE}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Cut:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowmonc, valueMax) {
                    return valuenowmonc + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowmonc, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowmonc}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowmonc}
                  valueMax={10}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 medium"
                    variant="circle-ghost"
                    onClick={this.IncrementItemMonC}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemMonC}
                  >
                    -
                  </Button>
                </form>
              </td>
            </tr>
            <tr>
              <th scope="col">Tuesday</th>
              <td>
                Interior:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowtuesint, valueMax) {
                    return valuenowtuesint + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowtuesint, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowtuesint}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowtuesint}
                  valueMax={60}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 medium"
                    variant="circle-ghost"
                    onClick={this.IncrementItemTuesInt}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemTuesInt}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Steel Fiber:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowtuessf, valueMax) {
                    return valuenowtuessf + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowtuessf, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowtuessf}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowtuessf}
                  valueMax={32}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 large"
                    variant="circle-ghost"
                    onClick={this.IncrementItemTuesSF}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemTuesSF}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Exterior:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowtuese, valueMax) {
                    return valuenowtuese + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowtuese, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowtuese}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowtuese}
                  valueMax={19}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 large"
                    variant="circle-ghost"
                    onClick={this.IncrementItemTuesE}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemTuesE}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Cut:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowtuesc, valueMax) {
                    return valuenowtuesc + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowtuesc, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowtuesc}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowtuesc}
                  valueMax={10}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 medium"
                    variant="circle-ghost"
                    onClick={this.IncrementItemTuesC}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemTuesC}
                  >
                    -
                  </Button>
                </form>
              </td>
            </tr>
            <tr>
              <th scope="col">Wednesday</th>
              <td>
                Interior:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowwedint, valueMax) {
                    return valuenowwedint + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowwedint, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowwedint}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowwedint}
                  valueMax={60}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 medium"
                    variant="circle-ghost"
                    onClick={this.IncrementItemWedInt}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemWedInt}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Steel Fiber:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowedsf, valueMax) {
                    return valuenowedsf + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowedsf, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowedsf}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowwedsf}
                  valueMax={32}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 large"
                    variant="circle-ghost"
                    onClick={this.IncrementItemWedSF}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemWedSF}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Exterior:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowede, valueMax) {
                    return valuenowede + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowede, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowede}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowwede}
                  valueMax={19}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 large"
                    variant="circle-ghost"
                    onClick={this.IncrementItemWedE}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemWedE}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Cut:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowwedc, valueMax) {
                    return valuenowwedc + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowwedc, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowwedc}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowwedc}
                  valueMax={10}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 medium"
                    variant="circle-ghost"
                    onClick={this.IncrementItemWedC}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemWedC}
                  >
                    -
                  </Button>
                </form>
              </td>
            </tr>
            <tr>
              <th scope="col">Thursday</th>
              <td>
                Interior:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowthursint, valueMax) {
                    return valuenowthursint + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowthursint, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowthursint}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowthursint}
                  valueMax={60}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 medium"
                    variant="circle-ghost"
                    onClick={this.IncrementItemThursInt}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemThursInt}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Steel Fiber:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowthurssf, valueMax) {
                    return valuenowthurssf + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowthurssf, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowthurssf}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowthurssf}
                  valueMax={32}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 large"
                    variant="circle-ghost"
                    onClick={this.IncrementItemThursSF}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemThursSF}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Exterior:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowthurse, valueMax) {
                    return valuenowthurse + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowthurse, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowthurse}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowthurse}
                  valueMax={19}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 large"
                    variant="circle-ghost"
                    onClick={this.IncrementItemThursE}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemThursE}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Cut:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowthursc, valueMax) {
                    return valuenowthursc + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowthursc, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowthursc}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowthursc}
                  valueMax={10}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 medium"
                    variant="circle-ghost"
                    onClick={this.IncrementItemThursC}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemThursC}
                  >
                    -
                  </Button>
                </form>
              </td>
            </tr>
            <tr>
              <th scope="col">Friday</th>
              <td>
                Interior:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowfriint, valueMax) {
                    return valuenowfriint + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowfriint, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowfriint}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowfriint}
                  valueMax={60}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 medium"
                    variant="circle-ghost"
                    onClick={this.IncrementItemFriInt}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemFriInt}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Steel Fiber:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowfrisf, valueMax) {
                    return valuenowfrisf + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowfrisf, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowfrisf}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowfrisf}
                  valueMax={32}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 large"
                    variant="circle-ghost"
                    onClick={this.IncrementItemFriSF}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemFriSF}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Exterior:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowfrie, valueMax) {
                    return valuenowfrie + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowfrie, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowfrie}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowfrie}
                  valueMax={19}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 large"
                    variant="circle-ghost"
                    onClick={this.IncrementItemFriE}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemFriE}
                  >
                    -
                  </Button>
                </form>
              </td>
              <td>
                Cut:{" "}
                <Progress
                  label="Percent complete"
                  formatValueText={function(valuenowfric, valueMax) {
                    return valuenowfric + " out of " + valueMax;
                  }}
                  formatDisplayedValue={function(valuenowfric, valueMax) {
                    return (
                      <span>
                        <Text color="primary" size="medium" weight="bold">
                          {valuenowfric}
                        </Text>
                        <br />
                        <Text color="secondary" size="x-small">
                          of{" "}
                        </Text>
                        <Text color="secondary" size="small">
                          {valueMax}
                        </Text>
                      </span>
                    );
                  }}
                  size="small"
                  variant="bar"
                  valueNow={this.state.valuenowfric}
                  valueMax={10}
                />
                <form onSubmit={this.addOrRemoveSet}>
                  <Button
                    size="small"
                    margin="0 small 0 medium"
                    variant="circle-ghost"
                    onClick={this.IncrementItemFriC}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    variant="circle-ghost"
                    onClick={this.DecreaseItemFriC}
                  >
                    -
                  </Button>
                </form>
              </td>
            </tr>
          </tbody>
        </Table>
        {/* <Heading>Week July 23rd - 27th</Heading> */}
      </div>
    );
  }
}

export default App;



      





