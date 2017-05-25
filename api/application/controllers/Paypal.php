<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');


require_once(dirname(__DIR__) . '/libraries/PayPal/autoload.php');
//require dirname(__FILE__) . '/Base_Controller.php';

use PayPal\Auth\OAuthTokenCredential;
use PayPal\Rest\ApiContext;
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Transaction;

class Paypal extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function order() {
        $paypalConf = $this->config->item('paypal');
        $clientId = $paypalConf['clientId'];
        $clientSecret = $paypalConf['clientSecret'];
        $appName = $paypalConf['appName'];
        $price = $paypalConf['price'];
        $shiping = 0;
        $tax = 0;
        $mode = "sandbox"; //or live

        $apiContext = new ApiContext(
                new OAuthTokenCredential(
                $clientId, $clientSecret
                )
        );
        $apiContext->setConfig(
                array(
                    'mode' => $mode,
                    'log.LogEnabled' => false
                )
        );

        $payer = new Payer();
        $payer->setPaymentMethod("paypal");

        $payerinfo = $payer->getPayerInfo();
        print_r($payerinfo);
        exit();


        $item1 = new Item();
        $item1->setName($appName)
                ->setCurrency('USD')
                ->setQuantity(1)
                ->setPrice($price);

        $itemList = new ItemList();
        $itemList->setItems(array($item1));
        $details = new Details();
        $details->setShipping($shiping)
                ->setTax($tax)
                ->setSubtotal($price);
        $amount = new Amount();
        $amount->setCurrency("USD")
                ->setTotal($price + $shiping + $tax)
                ->setDetails($details);

        $transaction = new Transaction();
        $transaction->setAmount($amount)
                ->setItemList($itemList)
                ->setDescription("Payment description")
                ->setInvoiceNumber(uniqid());



        $token = $this->createToken();
        $baseUrl = $this->config->item('base_url');
        $redirectUrls = new RedirectUrls();
        $redirectUrls->setReturnUrl($baseUrl."paypal/ordersucess?success=true&tk1=" . $token[0] . "&tk2=" . $token[1])
                ->setCancelUrl($baseUrl."paypal/orderfailed?success=false");

        $payment = new Payment();
        $payment->setIntent("order")
                ->setPayer($payer)
                ->setRedirectUrls($redirectUrls)
                ->setTransactions(array($transaction));

        // For Sample Purposes Only.
        $request = clone $payment;

        try {
            $payment->create($apiContext);
        } catch (Exception $ex) {
            // NOTE: PLEASE DO NOT USE RESULTPRINTER CLASS IN YOUR ORIGINAL CODE. FOR SAMPLE ONLY
            ResultPrinter::printError("Created Payment Order Using PayPal. Please visit the URL to Approve.", "Payment", null, $request, $ex);
            exit(1);
        }
        $approvalUrl = $payment->getApprovalLink();
        header("Location: " . $approvalUrl . "");
        die();
    }

    public function ordersucess() {
        $params = $_GET;
        print_r($_GET);
        exit;
        $tk1 = (isset($params['tk1'])) ? $params['tk1'] : '' ;
        $tk2 = (isset($params['tk2'])) ? $params['tk2'] : '' ;
        if ($this->checkToken($tk1, $tk2)) {
            $this->session->set_userdata(array('paymentSucess' => true));

            $file = UPLOAD_PATH . 'apps/shadowcore.exe';
            if (file_exists($file)) {
                header('Content-Description: File Transfer');
                header('Content-Type: application/octet-stream');
                header('Content-Disposition: attachment; filename="'.basename($file).'"');
                header('Expires: 0');
                header('Cache-Control: must-revalidate');
                header('Pragma: public');
                header('Content-Length: ' . filesize($file));
                readfile($file);
                exit;
            }


            die("Payment Sucess");
        } else {
            die("Token Is Invailed");
        }
    }

    public function orderfailed() {
        die("Payement Failed");
    }

    private function createToken() {
        $tk1 = substr(md5(uniqid(rand(), true)), 0, 12);
        $tk2 = substr($tk1, 0, 12);
        return array($tk1, $tk2);
    }

    private function checkToken($tk1, $tk2) {
        return substr($tk1, 0, 12) == $tk2;
    }

}
