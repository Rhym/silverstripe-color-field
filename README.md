# SilverStripe Color Field

[![Latest Stable Version](https://poser.pugx.org/ryanpotter/silverstripe-color-field/v/stable)](https://packagist.org/packages/ryanpotter/silverstripe-color-field)
[![Total Downloads](https://poser.pugx.org/ryanpotter/silverstripe-color-field/downloads)](https://packagist.org/packages/ryanpotter/silverstripe-color-field)
[![Monthly Downloads](https://poser.pugx.org/ryanpotter/silverstripe-color-field/d/monthly)](https://packagist.org/packages/ryanpotter/silverstripe-color-field)

A colour picker field for the Silverstripe CMS.

Uses [Iris Colour Picker](https://github.com/Automattic/Iris).

### Installation

Installation with composer:

```bash
composer require ryanpotter/silverstripe-color-field
```

### Usage

```php
use RyanPotter\SilverStripeColorField\Forms\ColorField;
```

```php
private static $db = [
    'MyColor' => DBVarchar::class . '(7)',
];
```

```php
ColorField::create('MyColor')
```

### Screenshot

![Screenshot](https://github.com/Rhym/silverstripe-color-field/blob/master/screenshot.png)

### Configuration

Add as many colours as you want to the palettes.

```yml
RyanPotter\SilverStripeColorField\Forms\ColorField:
  colors:
    - '#1976D2'
    - '#2196F3'
    - '#BBDEFB'
    - '#FFFFFF'
    - '#FF4081'
    - '#212121'
    - '#727272'
    - '#B6B6B6'
```
