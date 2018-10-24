# Silverstripe Color Field

A colour picker field for the Silverstripe CMS.

Uses [Iris Colour Picker](https://github.com/Automattic/Iris).

```php
private static $db = array(
  'MyColor' => 'Varchar(7)'
);
```

```php
ColorField::create('MyColor')
```

### Screenshot

![Screenshot](https://cloud.githubusercontent.com/assets/1136811/9506805/511c2b40-4c9e-11e5-85e8-4b08dec3a92a.png)

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
