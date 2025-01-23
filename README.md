# scipy-node

[![npm version](https://badge.fury.io/js/scipy-node.svg)](https://badge.fury.io/js/scipy-node)
[![Build Status](https://github.com/your-username/scipy-node/actions/workflows/ci.yml/badge.svg)](https://github.com/your-username/scipy-node/actions)

A Node.js library for scientific computing, inspired by SciPy. The goal of **scipy-node** is to provide robust and efficient scientific computation tools for JavaScript and TypeScript developers.

---

## Features

- Linear Algebra: Matrix operations, decompositions, and more.
- Statistics: Probability distributions, descriptive statistics.
- Extensible for other domains like signal processing, optimization, etc.
- Built with TypeScript for type safety.

---

## Installation

Install the package from npm:

```bash
npm install scipy-node
```

---

## Versioning

This project uses [Semantic Versioning](https://semver.org/) for versioning. The version number is defined in the `package.json` file.

1. Update the version number in the `package.json` file.
2. Commit the changes with a descriptive commit message.


OR:

You can use the following command to automatically update the version number:
   ```
   npm version patch   # For a bug fix
   npm version minor   # For a new feature
   npm version major   # For breaking changes
   ```

---

## Usage

To use the components in your project:

```js
import { Matrix } from 'scipy-node'

const a = new Matrix([[1, 2], [3, 4]])
const b = new Matrix([[5, 6], [7, 8]])
const result = a.add(b)

console.log(result) // Matrix { data: [[6, 8], [10, 12]] }
```

---

## Documentation

Comprehensive documentation is available in the [Wiki](https://github.com/basildex/scipy-node/wiki).


## Development

### Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (>= 18.0.0)
- **npm (>= 8.0.0)**



1. Clone the repository:

   ```bash
   git clone https://github.com/basildex/scipy-node.git
   cd scipy-node
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

3. Run the tests:

   ```bash
   npm test
   ```

### Contributing

We welcome contributions from the community! Follow these steps to contribute:

1. Fork the repository.
2. Clone your fork:

   ```bash
   git clone https://github.com/your-username/scipy-node.git
   cd scipy-node
   ```
3. Create a new branch for your changes:

   ```bash
   git checkout -b my-branch
   ```
4. Make your changes and commit them:

   ```bash
   git add .
   git commit -m "Your commit message"
   ```
5. Push your changes to your fork:

   ```bash
   git push origin my-branch
   ```
6. Create a pull request to the main branch.


## Reporting Issues

If you find a bug or have a feature request, please open an [issue](https://github.com/basildex/scipy-node/issues) on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Stay Connected

Follow us on social media and join the discussions:

[GitHub Discussions](https://github.com/basildex/scipy-node/discussions)        
[Twitter](https://twitter.com/sci_node)

---

### Key Sections
- **Features**: Highlights the library's capabilities.
- **Installation and Usage**: Guides users on how to get started.
- **Development Guide**: Details the setup process for contributors.
- **Contributing**: Encourages community engagement.
- **Reporting Issues**: Simplifies bug reporting and feature requests.
- **License**: Indicates the project's open-source nature.

This file provides a comprehensive overview and ensures developers and contributors can efficiently work with the repository.